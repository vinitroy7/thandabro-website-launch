import { Leaf, Sparkles, Sun, Zap, Package, ShieldCheck } from "lucide-react";

const items = [
  { icon: Leaf, title: "Real Ingredients", desc: "Sourced fresh, made honest." },
  { icon: Sparkles, title: "No Artificial Colors", desc: "Only natural goodness." },
  { icon: Sun, title: "Freshly Made Daily", desc: "Brewed every morning." },
  { icon: Zap, title: "Instant Refreshment", desc: "Chilled to perfection." },
  { icon: Package, title: "Premium Packaging", desc: "Reusable glass bottles." },
  { icon: ShieldCheck, title: "Hygienic Prep", desc: "FSSAI certified kitchen." },
];

export function WhyUs() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-ice">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold uppercase tracking-wider">
            Why ThandaBro
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-primary text-balance">
            Premium meets <span className="text-lime">desi swag</span>
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-3xl bg-card p-6 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all border border-border/50"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-lime-grad text-lime-foreground shadow-glow group-hover:scale-110 transition-transform">
                <it.icon className="size-6" />
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-primary">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
