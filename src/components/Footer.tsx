import { LINKS, PERSON } from '../config';

/**
 * Footer — name/tagline on the left, navigation links on the right.
 * Stacks vertically on mobile, horizontal on md+.
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <p className="font-display font-medium">{PERSON.name}</p>
        <p className="text-sm text-white/50">{PERSON.tagline}</p>
      </div>

      <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
        <a
          href={LINKS.personal}
          className="hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Personal
        </a>
        <a
          href={LINKS.professional}
          className="hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Professional
        </a>
        <a
          href={LINKS.instagram}
          className="hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href={LINKS.youtube}
          className="hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
        <a
          href={LINKS.linkedin}
          className="hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href={LINKS.github}
          className="hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </nav>
    </footer>
  );
}
