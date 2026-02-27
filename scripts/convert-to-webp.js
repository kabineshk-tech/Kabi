// scripts/convert-to-webp.js
// Converts all JPG / JPEG / PNG images in public/images/ to WebP at 80% quality.
// Usage: node scripts/convert-to-webp.js
//        node scripts/convert-to-webp.js --delete   ← also removes originals

import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const IMAGES_DIR = './public/images';
const QUALITY    = 80;
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);
const DELETE_ORIGINALS = process.argv.includes('--delete');

async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files   = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await findImages(fullPath));
    } else if (EXTENSIONS.has(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

async function convertToWebp(filePath) {
  const dir     = filePath.substring(0, filePath.lastIndexOf('/'));
  const name    = basename(filePath, extname(filePath));
  const outPath = join(dir, `${name}.webp`);

  await sharp(filePath)
    .webp({ quality: QUALITY })
    .toFile(outPath);

  const origSize = (await stat(filePath)).size;
  const newSize  = (await stat(outPath)).size;
  const saved    = (((origSize - newSize) / origSize) * 100).toFixed(1);

  console.log(`✓  ${filePath} → ${outPath}  (saved ${saved}%)`);

  if (DELETE_ORIGINALS) {
    await unlink(filePath);
    console.log(`   ✖  deleted original: ${filePath}`);
  }
}

async function main() {
  const images = await findImages(IMAGES_DIR);
  if (images.length === 0) {
    console.log('No JPG/PNG images found in public/images/');
    return;
  }
  console.log(`Converting ${images.length} image(s) to WebP at ${QUALITY}% quality...\n`);
  await Promise.all(images.map(convertToWebp));
  console.log('\nDone.');
}

main().catch(console.error);
