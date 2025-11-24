#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function walk(dir, exts = ['.js', '.jsx', '.ts', '.tsx']) {
  const results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of list) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.next', '.git'].includes(entry.name)) continue;
      results.push(...walk(full, exts));
    } else {
      if (exts.includes(path.extname(entry.name))) results.push(full);
    }
  }
  return results;
}

function normalizePublicPath(p) {
  if (!p) return p;
  return p.split('?')[0].split('#')[0];
}

function main() {
  const blurPath = path.join(__dirname, '..', 'lib', 'blur-placeholders.json');
  if (!fs.existsSync(blurPath)) {
    console.error('Missing blur-placeholders.json at', blurPath);
    process.exit(1);
  }
  const blurMap = JSON.parse(fs.readFileSync(blurPath, 'utf8'));

  const files = walk(path.join(__dirname, '..'));
  const required = new Set();

  const srcRegex = /src\s*=\s*(["'`])(\/[^"'`>]+)\1/g;
  const importRegex =
    /import\s+(?:([A-Za-z0-9_$]+)\s+from\s+)?["']([^"']+\.(?:png|jpe?g|svg|ico))["']/g;

  for (const file of files) {
    const text = fs.readFileSync(file, 'utf8');

    let m;
    while ((m = srcRegex.exec(text)) !== null) {
      const p = normalizePublicPath(m[2]);
      if (p && p.startsWith('/')) required.add(p);
    }

    const imports = {};
    while ((m = importRegex.exec(text)) !== null) {
      const id = m[1];
      const imp = m[2];
      const basename = '/' + path.basename(imp);
      if (id) imports[id] = basename;
    }

    for (const [id, basename] of Object.entries(imports)) {
      const usageRegex = new RegExp('src\\s*=\\s*\\{\\s*' + id + '\\s*\\}', 'g');
      if (usageRegex.test(text)) required.add(basename);
    }
  }

  const missing = [];
  for (const p of required) {
    const norm = normalizePublicPath(p);
    if (!blurMap[norm]) missing.push(norm);
  }

  if (missing.length > 0) {
    console.error('Missing blur placeholders for the following paths:');
    for (const m of missing) console.error('  -', m);
    console.error(
      '\nRun `npm run generate-blur` to regenerate placeholders or add entries to lib/blur-placeholders.json'
    );
    process.exit(1);
  }

  console.log(
    'All static image src references were found in lib/blur-placeholders.json —',
    required.size,
    'checked'
  );
}

main();
