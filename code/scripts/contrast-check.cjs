#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function parseTokens(css) {
  const vars = {};
  const re = /--([a-z0-9-]+)\s*:\s*([^;]+);/gi;
  let m;
  while ((m = re.exec(css))) {
    vars[m[1]] = m[2].trim();
  }
  return vars;
}

function toRgb(color) {
  color = color.trim();
  if (color.startsWith('#')) {
    const c = color.slice(1);
    if (c.length === 3) {
      return [parseInt(c[0] + c[0], 16), parseInt(c[1] + c[1], 16), parseInt(c[2] + c[2], 16)];
    }
    if (c.length === 6) {
      return [
        parseInt(c.slice(0, 2), 16),
        parseInt(c.slice(2, 4), 16),
        parseInt(c.slice(4, 6), 16),
      ];
    }
  }
  const m = color.match(/rgba?\(([^)]+)\)/i);
  if (m) {
    const parts = m[1].split(',').map((s) => s.trim());
    return parts.slice(0, 3).map(Number);
  }
  return null;
}

function luminance([r, g, b]) {
  const srgb = [r, g, b]
    .map((v) => v / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

function contrast(rgb1, rgb2) {
  if (!rgb1 || !rgb2) return null;
  const L1 = luminance(rgb1);
  const L2 = luminance(rgb2);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

function checkPairs(vars, pairs) {
  const results = [];
  for (const [a, b] of pairs) {
    const va = vars[a];
    const vb = vars[b];
    const ra = va ? toRgb(va) : null;
    const rb = vb ? toRgb(vb) : null;
    const ratio = contrast(ra, rb);
    results.push({ pair: `${a} / ${b}`, a: va || 'N/A', b: vb || 'N/A', ratio });
  }
  return results;
}

function formatRatio(r) {
  if (r === null) return 'N/A';
  return (Math.round(r * 100) / 100).toFixed(2);
}

const cssPath = path.join(__dirname, '..', 'styles', 'tokens.css');
if (!fs.existsSync(cssPath)) {
  console.error('tokens.css not found at', cssPath);
  process.exit(1);
}
const css = fs.readFileSync(cssPath, 'utf8');
const vars = parseTokens(css);

const pairsToCheck = [
  ['background', 'foreground'],
  ['card', 'card-foreground'],
  ['popover', 'popover-foreground'],
  ['primary', 'primary-foreground'],
  ['secondary', 'secondary-foreground'],
  ['accent', 'accent-foreground'],
  ['sidebar', 'sidebar-foreground'],
  ['muted', 'muted-foreground'],
];

const results = checkPairs(vars, pairsToCheck);
console.log('\nContrast check report (WCAG):');
console.log('Pair                              Ratio   AA(normal)  AA(large)');
for (const r of results) {
  const ratio = r.ratio;
  const passNormal = ratio !== null && ratio >= 4.5;
  const passLarge = ratio !== null && ratio >= 3.0;
  console.log(
    `- ${r.pair.padEnd(32)} ${String(formatRatio(ratio)).padEnd(7)}   ${passNormal ? '✓' : '✗'}          ${passLarge ? '✓' : '✗'}`
  );
}

const out = { timestamp: new Date().toISOString(), results };
fs.writeFileSync(path.join(__dirname, '..', 'report-contrast.json'), JSON.stringify(out, null, 2));
console.log('\nSaved JSON report to code/report-contrast.json');

if (results.some((r) => r.ratio !== null && r.ratio < 4.5)) {
  console.log(
    '\nSome pairs fail AA normal text contrast (ratio < 4.5). Consider adjusting colors.'
  );
  process.exitCode = 2;
} else {
  console.log('\nAll checked pairs pass AA normal text contrast.');
}
