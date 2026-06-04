import { MapPin, Phone, MessageCircle, Instagram, Mail } from "lucide-react";

export function LocationContact() {
  const wa = "https://wa.me/919205600434?text=Hi%20ThandaBro%2C%20I%20want%20to%20order";
  return (
    <section id="locations" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full bg-lime/15 text-lime px-3 py-1 text-xs font-bold uppercase tracking-wider">
            Visit & Order
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-primary text-balance">
            Find us. <span className="text-lime">Chill with us.</span>
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl overflow-hidden shadow-card border border-border/50 aspect-[4/3] lg:aspect-auto min-h-[360px]">
            <iframe
              title="ThandaBro Location"
              src="https://www.google.com/maps?q=Amrapali+Silicon+City+Sector+76+Noida&output=embed"
              loading="lazy"
              className="w-full h-full border-0"
            />
          </div>

          <div id="contact" className="rounded-3xl bg-hero text-white p-8 sm:p-10 shadow-card relative overflow-hidden">
            <div className="absolute -top-20 -right-20 size-60 bg-lime/20 blur-3xl rounded-full" />
            <div className="relative">
              <div className="flex items-start gap-3">
                <div className="size-12 rounded-2xl bg-lime-grad flex items-center justify-center shrink-0 shadow-glow">
                  <MapPin className="size-6 text-lime-foreground" />
                </div>
                <div>
                  <div className="text-sm text-white/60 font-semibold">Our Hub</div>
                  <div className="text-lg font-extrabold">Sector 76, Amrapali Silicon City</div>
                  <div className="text-white/70">Noida, Uttar Pradesh</div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <a href={wa} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-3 rounded-2xl bg-lime-grad text-lime-foreground px-5 py-4 font-extrabold hover:scale-[1.02] transition-transform">
                  <span className="flex items-center gap-3"><MessageCircle className="size-5" /> WhatsApp Order</span>
                  <span>→</span>
                </a>
                <a href="tel:+919999999999" className="flex items-center justify-between gap-3 rounded-2xl glass text-white px-5 py-4 font-bold hover:bg-white/15">
                  <span className="flex items-center gap-3"><Phone className="size-5" /> Call Now · +91 92056 00434</span>
                  <span>→</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center justify-between gap-3 rounded-2xl glass text-white px-5 py-4 font-bold hover:bg-white/15">
                  <span className="flex items-center gap-3"><Instagram className="size-5" /> @thandabro</span>
                  <span>→</span>
                </a>
                <a href="mailto:hello@thandabro.in" className="flex items-center justify-between gap-3 rounded-2xl glass text-white px-5 py-4 font-bold hover:bg-white/15">
                  <span className="flex items-center gap-3"><Mail className="size-5" /> hello@thandabro.in</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
