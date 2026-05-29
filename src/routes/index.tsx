import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/thandabro/Navbar";
import { Hero } from "@/components/thandabro/Hero";
import { Marquee } from "@/components/thandabro/Marquee";
import { Products } from "@/components/thandabro/Products";
import { SpinWin } from "@/components/thandabro/SpinWin";
import { WhyUs } from "@/components/thandabro/WhyUs";
import { Reviews } from "@/components/thandabro/Reviews";
import { InstaFeed } from "@/components/thandabro/InstaFeed";
import { LocationContact } from "@/components/thandabro/LocationContact";
import { Footer } from "@/components/thandabro/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ThandaBro · Beat the Heat with Premium Cold Drinks" },
      { name: "description", content: "Freshly crafted Aam Pana, Matcha, Cold Coffee & Chach in premium glass bottles. Delivered chilled across Noida. Chill Karo. Recharge Karo." },
      { property: "og:title", content: "ThandaBro · Cold Drinks. Cool Vibes." },
      { property: "og:description", content: "Premium cold beverages, freshly made daily. Spin & Win free drinks today!" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <SpinWin />
        <WhyUs />
        <Reviews />
        <InstaFeed />
        <LocationContact />
      </main>
      <Footer />
    </div>
  );
}
