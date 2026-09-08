// Static server for the pilot-study landing page (byte-range support so the video can be scrubbed).
// npm run pilot  ->  http://localhost:8080
import http from 'node:http';
import fs from 'node:fs';
import { resolve, join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'pilot-study');
const port = Number(process.env.PORT || 8080);
const types = { '.html': 'text/html; charset=utf-8', '.mp4': 'video/mp4', '.webm': 'video/webm', '.jpg': 'image/jpeg', '.css': 'text/css', '.js': 'text/javascript' };

http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);
  if (url.endsWith('/')) url += 'index.html';
  const file = join(root, url);
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); return res.end('not found'); }
  const size = fs.statSync(file).size;
  const type = types[extname(file)] || 'application/octet-stream';
  const range = req.headers.range;
  if (range) {
    const [s, e] = range.replace('bytes=', '').split('-');
    const start = Number(s), end = e ? Number(e) : size - 1;
    res.writeHead(206, { 'Content-Type': type, 'Accept-Ranges': 'bytes', 'Content-Range': `bytes ${start}-${end}/${size}`, 'Content-Length': end - start + 1 });
    return fs.createReadStream(file, { start, end }).pipe(res);
  }
  res.writeHead(200, { 'Content-Type': type, 'Accept-Ranges': 'bytes', 'Content-Length': size });
  fs.createReadStream(file).pipe(res);
}).listen(port, () => console.log(`Pilot Study landing page: http://localhost:${port}/`));
