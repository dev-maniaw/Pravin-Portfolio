/**
 * Cloudflare R2 asset URL helper
 *
 * Usage:
 *   import { r2 } from '@/lib/r2';
 *   <img src={r2('GFX/0.jpeg')} />
 *   <video src={r2('Videos/ROM.mp4')} />
 *
 * Set NEXT_PUBLIC_R2_URL in .env.local to your R2 public bucket URL.
 * e.g. NEXT_PUBLIC_R2_URL=https://pub-xxxx.r2.dev
 *
 * Filenames with spaces are automatically URL-encoded (e.g. "Rockstar Games.mp4" → "Rockstar%20Games.mp4")
 */
export const r2 = (path: string): string => {
  const base = process.env.NEXT_PUBLIC_R2_URL;

  // Encode each path segment to handle spaces and special characters in filenames
  const encodedPath = path
    .replace(/^\//, '')
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');

  if (!base) {
    // Fallback to local /public during development if R2 URL is not set
    return `/${encodedPath}`;
  }

  return `${base.replace(/\/$/, '')}/${encodedPath}`;
};
