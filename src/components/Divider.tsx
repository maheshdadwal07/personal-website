/**
 * Divider — centred "Two Worlds. One Person." label with flanking hairlines.
 */
export default function Divider() {
  return (
    <div className="reveal reveal-4 flex items-center gap-4 pb-6 md:pb-8">
      <span className="h-px flex-1 bg-white/10" />
      <span className="font-display text-xs md:text-sm tracking-[0.35em] uppercase text-white/45 whitespace-nowrap">
        Two Worlds. One Person.
      </span>
      <span className="h-px flex-1 bg-white/10" />
    </div>
  );
}
