#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OUT_DIR = path.join(PUBLIC_DIR, '_optimized');
const SUPPORTED = ['.jpg', '.jpeg', '.png', '.webp', '.tiff'];

function walk(dir) {
  const items = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (name === '_optimized') continue; // skip output folder
      items.push(...walk(full));
    } else if (stat.isFile()) {
      items.push(full);
    }
  }
  return items;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function processFile(file) {
  const rel = path.relative(PUBLIC_DIR, file);
  const ext = path.extname(file).toLowerCase();
  if (!SUPPORTED.includes(ext)) return null;

  const dirName = path.dirname(rel);
  const base = path.basename(file, ext);
  const outDir = path.join(OUT_DIR, dirName);
  ensureDir(outDir);

  const src = sharp(file);
  try {
    const webpOut = path.join(outDir, `${base}.webp`);
    await src.clone().webp({ quality: 80 }).toFile(webpOut);

    const avifOut = path.join(outDir, `${base}.avif`);
    await src.clone().avif({ quality: 50 }).toFile(avifOut);

    return {
      file: rel,
      webp: path.relative(PUBLIC_DIR, webpOut),
      avif: path.relative(PUBLIC_DIR, avifOut),
    };
  } catch (err) {
    console.error('Failed to process', file, err);
    return null;
  }
}

async function main() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error('No public directory found at', PUBLIC_DIR);
    process.exit(1);
  }

  ensureDir(OUT_DIR);
  console.log('Scanning public directory for images...');
  const files = walk(PUBLIC_DIR).filter((f) => !f.includes(path.sep + '_optimized' + path.sep));
  const images = files.filter((f) => SUPPORTED.includes(path.extname(f).toLowerCase()));
  console.log(`Found ${images.length} images to optimize.`);

  const results = [];
  for (const f of images) {
    process.stdout.write(`Optimizing ${path.relative(PUBLIC_DIR, f)} ... `);
     
    const r = await processFile(f);
    if (r) {
      results.push(r);
      console.log('done');
    } else {
      console.log('skipped');
    }
  }

  const report = { generatedAt: new Date().toISOString(), count: results.length, results };
  const rptPath = path.join(PUBLIC_DIR, '_optimized', 'optimize-report.json');
  fs.writeFileSync(rptPath, JSON.stringify(report, null, 2));
  console.log('\nOptimization complete. Report saved to', rptPath);
  console.log('Optimized files are under public/_optimized/ (same structure as public/)');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
