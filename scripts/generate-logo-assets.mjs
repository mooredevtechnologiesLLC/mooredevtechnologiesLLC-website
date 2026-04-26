/**
 * generate-logo-assets.mjs
 *
 * Reads public/logo.svg and exports PNG files at standard sizes into public/.
 * Run with: npm run generate-logo-assets
 *
 * Output files:
 *   public/logo-512.png        — general use, social sharing
 *   public/logo-192.png        — Android / PWA icon
 *   public/apple-touch-icon.png — iOS home screen (180×180)
 *   public/favicon-32.png      — browser tab fallback
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const svgPath = resolve(root, 'public', 'logo.svg');
const svgContent = readFileSync(svgPath, 'utf-8');

/** Size configurations to export. */
const EXPORTS = [
  { name: 'logo-512.png',         size: 512 },
  { name: 'logo-192.png',         size: 192 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon-32.png',       size: 32  },
];

for (const { name, size } of EXPORTS) {
  const resvg = new Resvg(svgContent, {
    fitTo: { mode: 'width', value: size },
    background: 'transparent',
  });

  const png = resvg.render().asPng();
  const outPath = resolve(root, 'public', name);
  writeFileSync(outPath, png);
  console.log(`✓ ${name} (${size}×${size})`);
}
