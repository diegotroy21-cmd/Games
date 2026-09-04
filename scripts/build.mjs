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

// HTML_DIR overrides where index.html/styles.css are read from (useful while public/ is being edited).
const htmlDir = process.env.HTML_DIR ? resolve(process.env.HTML_DIR) : resolve(root, 'public');
const html = readFileSync(resolve(htmlDir, 'index.html'), 'utf8');
const css = readFileSync(resolve(htmlDir, 'styles.css'), 'utf8');
const js = readFileSync(outDev, 'utf8').replace(/<\/script/gi, '<\\/script');

// Function replacements: a string replacement would interpret "$&"/"$'" sequences inside the bundle.
const single = html
  .replace('<link rel="stylesheet" href="./styles.css">', () => `<style>\n${css}\n</style>`)
  .replace('<script src="./game.js"></script>', () => `<script>\n${js}\n</script>`);
if (!single.includes('</style>') || !single.includes('\n</script>')) throw new Error('index.html template markers not found');

const target = outDir ? resolve(outDir, 'index.html') : resolve(root, 'dist/index.html');
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, single);
console.log(`${outDir ? target : 'dist/index.html'} written (${(single.length / 1024).toFixed(0)} KB)`);

// --artifact: the same page without the document wrapper (title + style first, then body content),
// for hosts that supply their own <html>/<head>/<body> skeleton.
if (argv.includes('--artifact')) {
  const body = single.slice(single.indexOf('<body>') + 6, single.lastIndexOf('</body>'));
  const artifact = `<title>Relic Rush</title>\n<style>\n${css}\n</style>\n${body}`;
  const out = outDir ? resolve(outDir, 'artifact.html') : resolve(root, 'dist/artifact.html');
  writeFileSync(out, artifact);
  console.log(`${out} written (${(artifact.length / 1024).toFixed(0)} KB)`);
}
