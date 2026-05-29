import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/thandabro-logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#spin", label: "Spin & Win" },
  { href: "#about", label: "About" },
  { href: "#locations", label: "Locations" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? "glass-light rounded-2xl shadow-card mx-2 sm:mx-4" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-4 py-2">
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <img
              src={logo}
              alt="ThandaBro logo"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full ring-2 ring-primary/20"
            />
            <span className="font-extrabold text-lg sm:text-xl text-primary">
              Thanda<span className="text-lime">Bro</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-full text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-secondary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-lime-grad text-lime-foreground px-5 py-2.5 text-sm font-bold shadow-glow hover:scale-105 transition-transform"
            >
              Order Now
            </a>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex items-center justify-center rounded-full glass-light p-2.5 text-primary"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden glass-light rounded-2xl p-3 mt-2 flex flex-col gap-1 shadow-card">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-semibold text-foreground/90 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#menu"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-xl bg-lime-grad text-lime-foreground px-4 py-3 text-base font-bold"
            >
              Order Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
