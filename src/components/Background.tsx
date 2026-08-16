/**
 * Background — animated glow orbs (red + blue) and grain film overlay.
 * Purely decorative; aria-hidden so screen readers skip it.
 */
export default function Background() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="glow-red" />
      <div className="glow-blue" />
      <div className="grain" />
    </div>
  );
}
