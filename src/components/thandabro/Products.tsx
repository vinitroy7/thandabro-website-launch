import { Plus } from "lucide-react";
import aam from "@/assets/product-aampana.jpg";
import matcha from "@/assets/product-matcha.jpg";
import coffee from "@/assets/product-coldcoffee.jpg";
import chach from "@/assets/product-chach.jpg";

const products = [
  { name: "Aam Pana", price: 99, desc: "Fresh Raw Mango Cooler", img: aam, tint: "from-mango/40 to-lime/30", badge: "Bestseller" },
  { name: "Matcha", price: 149, desc: "Premium Japanese Green Tea", img: matcha, tint: "from-lime/40 to-emerald-300/30", badge: "New" },
  { name: "Cold Coffee", price: 119, desc: "Creamy & Refreshing", img: coffee, tint: "from-coffee/40 to-amber-200/30", badge: "Loved" },
  { name: "Chach", price: 69, desc: "Traditional Indian Buttermilk", img: chach, tint: "from-sky-300/40 to-ice/40", badge: "Classic" },
];

export function Products() {
  return (
    <section id="menu" className="relative py-20 sm:py-28 bg-background overflow-hidden">
      <div className="absolute top-20 right-0 size-72 rounded-full bg-lime/10 blur-3xl" />
      <div className="absolute bottom-20 left-0 size-72 rounded-full bg-mango/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-lime/15 text-lime px-3 py-1 text-xs font-bold uppercase tracking-wider">
            Our Menu
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-primary text-balance">
            Cold Drinks. <span className="text-lime">Cool Vibes.</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Crafted with real ingredients, zero artificial colors, served chilled in premium glass bottles.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article
              key={p.name}
              className="group relative rounded-3xl bg-card shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-border/50"
            >
              <div className={`relative aspect-square bg-gradient-to-br ${p.tint} overflow-hidden`}>
                <span className="absolute top-3 left-3 z-10 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                  {p.badge}
                </span>
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="absolute inset-0 size-full object-contain p-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-extrabold text-primary">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{p.desc}</p>
                  </div>
                  <div className="text-xl font-extrabold text-primary shrink-0">₹{p.price}</div>
                </div>
                <button className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-3 text-sm font-bold hover:bg-lime hover:text-lime-foreground transition-colors">
                  <Plus className="size-4" />
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
