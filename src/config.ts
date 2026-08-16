/**
 * Site configuration — update these values with real URLs before deployment.
 * All placeholder strings are intentional; replace them with actual links.
 */

/** External link URLs — update each placeholder with the real URL. */
export const LINKS = {
  personal: 'https://mahesh-dadwal.vercel.app/',
  professional: 'https://maheshdadwal.vercel.app/',
  instagram: 'https://www.instagram.com/maheshdadwal07/',
  youtube: 'https://www.youtube.com/@MaheshDadwal07',
  linkedin: 'https://www.linkedin.com/in/maheshdadwal07/',
  github: 'https://github.com/maheshdadwal07',
} as const;

/** Person metadata used in visible copy and JSON-LD structured data. */
export const PERSON = {
  name: 'Mahesh Dadwal',
  alternateName: 'MaheshDadwal07',
  tagline: 'Full Stack Developer • Fitness • Content Creator',
  statement: 'Building software. Building myself.',
  intro: "I'm a CSE student and Full Stack Developer building real-world web applications while documenting my fitness and personal journey.",
} as const;

/** Site-level constants used in SEO metadata and structured data. */
export const SITE = {
  url: 'https://maheshdadwal07.me',
  /** Replace IMAGE_URL_PLACEHOLDER with the URL of your Open Graph / preview image. */
  ogImage: 'IMAGE_URL_PLACEHOLDER',
} as const;
