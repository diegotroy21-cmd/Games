// Builds the game two ways:
//   public/game.js   -> dev bundle used by `npm run dev` (served from public/)
//   dist/index.html  -> single self-contained file (JS + CSS inlined), playable via file://
import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const outdirArg = argv.indexOf('--outdir');
// --outdir <dir> builds into a private directory (used by parallel agents/tests) instead of public/ + dist/.
const outDir = outdirArg >= 0 ? resolve(root, argv[outdirArg + 1]) : null;
const outDev = outDir ? resolve(outDir, 'game.js') : resolve(root, 'public/game.js');
const minify = !argv.includes('--no-minify');
if (outDir) mkdirSync(outDir, { recursive: true });

const result = await build({
  entryPoints: [resolve(root, 'src/main.js')],
  bundle: true,
  format: 'iife',
  target: ['es2020'],
  minify,
  sourcemap: false,
  legalComments: 'none',
  outfile: outDev,
  logLevel: 'info',
  define: { 'process.env.NODE_ENV': '"production"' },
});
if (result.errors.length) process.exit(1);

const html = readFileSync(resolve(root, 'public/index.html'), 'utf8');
const css = readFileSync(resolve(root, 'public/styles.css'), 'utf8');
const js = readFileSync(outDev, 'utf8').replace(/<\/script/gi, '<\\/script');

const single = html
  .replace('<link rel="stylesheet" href="./styles.css">', `<style>\n${css}\n</style>`)
  .replace('<script src="./game.js"></script>', `<script>\n${js}\n</script>`);

const target = outDir ? resolve(outDir, 'index.html') : resolve(root, 'dist/index.html');
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, single);
console.log(`${outDir ? target : 'dist/index.html'} written (${(single.length / 1024).toFixed(0)} KB)`);
