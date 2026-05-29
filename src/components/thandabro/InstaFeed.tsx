import { Instagram } from "lucide-react";
import aam from "@/assets/product-aampana.jpg";
import matcha from "@/assets/product-matcha.jpg";
import coffee from "@/assets/product-coldcoffee.jpg";
import chach from "@/assets/product-chach.jpg";
import hero from "@/assets/hero-bottles.jpg";

const tiles = [aam, matcha, coffee, chach, hero, aam];

export function InstaFeed() {
  return (
    <section className="py-20 sm:py-28 bg-ice">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div>
            <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-bold uppercase tracking-wider">
              @thandabro
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary">
              From the Gram
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold hover:bg-lime hover:text-lime-foreground transition-colors"
          >
            <Instagram className="size-4" /> Follow Us
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {tiles.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-card"
            >
              <img src={src} loading="lazy" alt="ThandaBro instagram post" className="size-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors flex items-center justify-center">
                <Instagram className="size-7 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
