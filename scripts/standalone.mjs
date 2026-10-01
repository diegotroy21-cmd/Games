// Inline a landing page's ./assets/* references as data URIs so it works as one file.
//   node scripts/standalone.mjs pharma                 -> pharma/standalone.html
//   node scripts/standalone.mjs pharma --artifact out  -> out (no document wrapper, MP4 only, for hosted previews)
import fs from 'node:fs';
import { resolve, dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const [site, flag, out] = process.argv.slice(2);
if (!site) { console.error('usage: node scripts/standalone.mjs <site-dir> [--artifact <out.html>]'); process.exit(1); }
const dir = join(root, site);
const artifact = flag === '--artifact';
const types = { '.mp4': 'video/mp4', '.webm': 'video/webm', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };

let html = fs.readFileSync(join(dir, 'index.html'), 'utf8');
// The hosted preview has a size cap, so it keeps only the MP4 source.
if (artifact) html = html.replace(/^\s*<source [^>]*\.webm"[^>]*>\n/m, '');

html = html.replace(/\.\/assets\/[\w./-]+\.(mp4|webm|jpe?g|png|webp)/g, (ref) => {
  const file = join(dir, ref);
  return `data:${types[extname(file)]};base64,${fs.readFileSync(file).toString('base64')}`;
});

if (artifact) {
  html = html.replace(/<!doctype html>\s*/i, '').replace(/<\/?html[^>]*>\s*/g, '').replace(/<\/?head>\s*/g, '')
    .replace(/<\/?body>\s*/g, '').replace(/<meta charset="utf-8">\s*/, '').replace(/<meta name="viewport"[^>]*>\s*/, '');
}
const target = artifact ? resolve(out) : join(dir, 'standalone.html');
fs.writeFileSync(target, html);
console.log(`${target}  ${(html.length / 1e6).toFixed(2)} MB`);
