const items = ["Real Ingredients", "Great Taste", "Instant Refreshment", "Chill Ka Scene", "Made Fresh Daily", "Cool Vibes Only"];

export function Marquee() {
  return (
    <div className="bg-lime-grad text-lime-foreground py-4 overflow-hidden border-y-4 border-primary">
      <div className="flex gap-12 animate-marquee whitespace-nowrap font-extrabold text-lg uppercase tracking-wider">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="size-2 rounded-full bg-primary/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
