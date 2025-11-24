const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function gen() {
  const publicDir = path.join(__dirname, '..', 'public');
  const outDir = path.join(__dirname, '..', 'lib');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const exts = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.ico'];
  const files = fs
    .readdirSync(publicDir)
    .filter((f) => exts.includes(path.extname(f).toLowerCase()));
  const mapping = {};

  for (const file of files) {
    try {
      const filePath = path.join(publicDir, file);
      const relPath = '/' + file;

      const ext = path.extname(file).toLowerCase();
      if (ext === '.svg' || ext === '.ico' || ext === '.gif') {
        const color = colorFromString(file);
        const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10' preserveAspectRatio='none'><rect width='16' height='10' fill='${color}'/></svg>`;
        mapping[relPath] = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
        continue;
      }

      const buf = await sharp(filePath).resize(20).blur(5).toBuffer();
      const mime = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg';
      const base64 = `data:${mime};base64,${buf.toString('base64')}`;
      mapping[relPath] = base64;
    } catch (err) {
      console.error('error processing', file, err);
    }
  }

  const outFile = path.join(outDir, 'blur-placeholders.json');
  fs.writeFileSync(outFile, JSON.stringify(mapping, null, 2), 'utf8');
  console.log('Generated', outFile);
}

function colorFromString(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  const r = (h >> 16) & 255;
  const g = (h >> 8) & 255;
  const b = h & 255;
  return `rgb(${Math.abs((r % 200) + 30)},${Math.abs((g % 200) + 30)},${Math.abs((b % 200) + 30)})`;
}

gen()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
