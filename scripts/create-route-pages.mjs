import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const buildDir = join(repoRoot, 'build');
const indexFile = join(buildDir, 'index.html');

const routes = [
  'research',
  'Innovations',
  'impact',
  'publications',
  'team',
  'news',
  'blog',
];

routes.forEach((route) => {
  const routeDir = join(buildDir, route);
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(indexFile, join(routeDir, 'index.html'));
});
