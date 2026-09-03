// Dev server with live rebuild: http://localhost:8000
import { context } from 'esbuild';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT || 8000);
const ctx = await context({
  entryPoints: [resolve(root, 'src/main.js')],
  bundle: true,
  format: 'iife',
  target: ['es2020'],
  sourcemap: 'inline',
  outfile: resolve(root, 'public/game.js'),
  logLevel: 'info',
  define: { 'process.env.NODE_ENV': '"development"' },
});
await ctx.watch();
const { hosts } = await ctx.serve({ servedir: resolve(root, 'public'), port, host: '127.0.0.1' });
console.log(`Relic Rush dev server: http://${hosts[0] || '127.0.0.1'}:${port}`);
