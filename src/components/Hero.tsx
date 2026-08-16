import { PERSON } from '../config';

/**
 * Hero — large name heading, tagline, and personal statement.
 * Uses staggered reveal animations (.reveal-1 through .reveal-3).
 */
export default function Hero() {
  return (
    <section className="pt-8 pb-10 md:pt-12 md:pb-14">
      <h1 className="reveal reveal-1 font-display font-medium leading-[0.92] tracking-tight text-[15vw] sm:text-7xl md:text-8xl">
        {PERSON.name}
      </h1>
      <p className="reveal reveal-2 mt-6 text-lg md:text-2xl text-white/70 max-w-2xl">
        {PERSON.tagline}
      </p>
      <p className="reveal reveal-3 mt-3 font-display italic text-xl md:text-2xl text-white/90">
        {PERSON.statement}
      </p>
    </section>
  );
}
