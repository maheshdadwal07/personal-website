import { ArrowUpRight } from 'lucide-react';
import { LINKS } from '../config';

/**
 * PersonalCard — red-tinted card linking to the personal / fitness site.
 */
function PersonalCard() {
  return (
    <a
      href={LINKS.personal}
      className="group relative rounded-3xl p-8 md:p-11 border border-white/10 overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:border-[#E4362B]/40"
      style={{ background: 'linear-gradient(160deg, rgba(228,54,43,0.06), rgba(10,11,13,0.5))' }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Hover glow bloom */}
      <div
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
        style={{ background: 'rgba(228,54,43,0.28)' }}
      />

      <div className="relative">
        <span className="font-display text-xs tracking-[0.3em] uppercase text-[#FF8A7E] mb-5 block">
          Personal
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-medium mb-3">
          Know Me Personally
        </h2>
        <p className="text-white/60 leading-relaxed mb-8 max-w-sm">
          Fitness, transformation, lifestyle, workouts and the journey behind it all.
        </p>
        <span className="inline-flex items-center gap-2 font-medium group-hover:gap-3 transition-all">
          Explore My Journey <ArrowUpRight size={19} strokeWidth={2} />
        </span>
      </div>
    </a>
  );
}

/**
 * ProfessionalCard — blue-tinted card linking to the developer portfolio.
 */
function ProfessionalCard() {
  return (
    <a
      href={LINKS.professional}
      className="group relative rounded-3xl p-8 md:p-11 border border-white/10 overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:border-[#4F6CF7]/40"
      style={{ background: 'linear-gradient(160deg, rgba(79,108,247,0.08), rgba(10,11,13,0.5))' }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Hover glow bloom */}
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
        style={{ background: 'rgba(79,108,247,0.28)' }}
      />

      <div className="relative">
        <span className="font-display text-xs tracking-[0.3em] uppercase text-[#9CAEFF] mb-5 block">
          Professional
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-medium mb-3">
          Know Me Professionally
        </h2>
        <p className="text-white/60 leading-relaxed mb-8 max-w-sm">
          Full Stack Development, projects, technical skills, experience and career.
        </p>
        <span className="inline-flex items-center gap-2 font-medium group-hover:gap-3 transition-all">
          View My Work <ArrowUpRight size={19} strokeWidth={2} />
        </span>
      </div>
    </a>
  );
}

/**
 * Cards — two-column grid (stacks on mobile) of the personal and professional cards.
 */
export default function Cards() {
  return (
    <section
      aria-label="Explore"
      className="grid md:grid-cols-2 gap-5 md:gap-6 pb-16 md:pb-20"
    >
      <PersonalCard />
      <ProfessionalCard />
    </section>
  );
}
