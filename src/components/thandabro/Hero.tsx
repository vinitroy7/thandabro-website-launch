import { ArrowRight, Snowflake } from "lucide-react";
import hero from "@/assets/hero-bottles.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-hero text-white pt-28 pb-16"
    >
      {/* Floating ice cubes */}
      <Snowflake className="absolute top-32 left-6 size-8 text-ice/40 animate-float" />
      <Snowflake className="absolute top-1/3 right-10 size-12 text-lime/60 animate-float-slow" />
      <Snowflake className="absolute bottom-32 left-1/4 size-6 text-ice/50 animate-float" style={{ animationDelay: "1s" }} />
      <Snowflake className="absolute top-1/2 right-1/3 size-10 text-mango/50 animate-float-slow" style={{ animationDelay: "2s" }} />

      {/* Glowing blob */}
      <div className="absolute -top-40 -left-40 size-[500px] rounded-full bg-lime/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 size-[500px] rounded-full bg-mango/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-lime">
            <span className="size-2 rounded-full bg-lime animate-pulse" />
            Chill Ka Scene · Made with Real Ingredients
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-balance leading-[1.05]">
            Beat the Heat with{" "}
            <span className="inline-block text-lime drop-shadow-[0_2px_30px_rgba(126,211,33,0.5)]">
              ThandaBro
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-white/75 max-w-xl mx-auto lg:mx-0">
            Freshly crafted. Perfectly chilled. Delivered to your door. Premium cold drinks for hot Indian summers.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime-grad text-lime-foreground px-7 py-4 text-base font-bold shadow-glow hover:scale-105 transition-transform"
            >
              Order Now
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full glass text-white px-7 py-4 text-base font-bold hover:bg-white/15 transition-colors"
            >
              View Menu
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            {[
              { k: "10K+", v: "Bottles Served" },
              { k: "4.9★", v: "Customer Rating" },
              { k: "30min", v: "Avg Delivery" },
            ].map((s) => (
              <div key={s.k} className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-lime">{s.k}</div>
                <div className="text-xs text-white/60 mt-0.5">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-lime/30 blur-3xl rounded-full animate-splash" />
          <img
            src={hero}
            alt="ThandaBro chilled glass bottles with ice and fresh ingredients"
            width={1920}
            height={1080}
            className="relative rounded-3xl shadow-2xl ring-1 ring-white/10"
          />
          <div className="absolute -bottom-4 -left-4 sm:-left-8 glass rounded-2xl px-4 py-3 animate-float-slow">
            <div className="text-xs text-white/70">Today's Pick</div>
            <div className="font-bold text-lime">Aam Pana · ₹99</div>
          </div>
        </div>
      </div>
    </section>
  );
}
