import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Aanya S.", role: "Foodie · Noida", text: "The Aam Pana is straight outta nani's kitchen. Cold, tangy, perfect. Ordered 3 times already!", rating: 5 },
  { name: "Rohit M.", role: "Designer", text: "Their matcha is legit premium. Better than most cafes in Delhi NCR honestly.", rating: 5 },
  { name: "Priya K.", role: "Yoga Coach", text: "Chach in glass bottles? Yes please. My summer fitness staple.", rating: 5 },
];

export function Reviews() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-mango/20 text-coffee px-3 py-1 text-xs font-bold uppercase tracking-wider">
            Loved by 10,000+
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-primary text-balance">
            Bro talk. Real reviews.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="relative rounded-3xl bg-card p-7 shadow-card border border-border/50 hover:shadow-glow transition-shadow"
            >
              <Quote className="absolute top-5 right-5 size-8 text-lime/30" />
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-mango text-mango" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground/90 leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="size-10 rounded-full bg-lime-grad flex items-center justify-center font-extrabold text-lime-foreground">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-bold text-primary">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
