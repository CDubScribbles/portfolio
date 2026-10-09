/**
 * One backdrop image per page. Each value is a file name stem in public/images:
 * "hero-backdrop" means hero-backdrop-800.webp, -1280.webp and -1920.webp.
 *
 * To give a page its own image, add the three sizes to public/images and change
 * that page's value here. Nothing else needs to change.
 */
export const BACKDROPS = {
  landing: 'hero-backdrop',
  resume: 'hero-backdrop',
  about: 'hero-backdrop',
  projects: 'hero-backdrop',
  notFound: 'hero-backdrop'
} as const;

export type BackdropKey = keyof typeof BACKDROPS;

export const BACKDROP_WIDTHS = [800, 1280, 1920] as const;
