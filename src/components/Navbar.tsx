import { LINKS, PERSON } from '../config';
import { GithubIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from './icons';

/**
 * Navbar — site name on the left, social icon links on the right.
 */
export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-7 md:py-8">
      <span className="font-display text-xs md:text-sm tracking-[0.28em] uppercase text-white/55">
        {PERSON.name}
      </span>

      <nav aria-label="Social" className="flex items-center gap-5">
        <a
          href={LINKS.github}
          className="text-white/50 hover:text-white transition-colors"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon size={18} strokeWidth={1.75} />
        </a>
        <a
          href={LINKS.linkedin}
          className="text-white/50 hover:text-white transition-colors"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon size={18} strokeWidth={1.75} />
        </a>
        <a
          href={LINKS.instagram}
          className="text-white/50 hover:text-white transition-colors"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon size={18} strokeWidth={1.75} />
        </a>
        <a
          href={LINKS.youtube}
          className="text-white/50 hover:text-white transition-colors"
          aria-label="YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeIcon size={18} strokeWidth={1.75} />
        </a>
      </nav>
    </header>
  );
}
