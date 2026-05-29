import { Instagram, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/thandabro-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="ThandaBro" className="size-12 rounded-full ring-2 ring-lime/40" />
              <span className="font-extrabold text-2xl">
                Thanda<span className="text-lime">Bro</span>
              </span>
            </div>
            <p className="mt-4 text-2xl sm:text-3xl font-extrabold text-balance">
              Chill Karo. <span className="text-lime">Recharge Karo.</span>
            </p>
            <p className="mt-3 text-primary-foreground/60 max-w-md">
              Premium cold beverages crafted for the Indian summer. Made fresh, served chilled.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://instagram.com" aria-label="Instagram" className="size-10 rounded-full glass flex items-center justify-center hover:bg-lime hover:text-lime-foreground transition-colors"><Instagram className="size-4" /></a>
              <a href="https://wa.me/919999999999" aria-label="WhatsApp" className="size-10 rounded-full glass flex items-center justify-center hover:bg-lime hover:text-lime-foreground transition-colors"><MessageCircle className="size-4" /></a>
              <a href="tel:+919999999999" aria-label="Call" className="size-10 rounded-full glass flex items-center justify-center hover:bg-lime hover:text-lime-foreground transition-colors"><Phone className="size-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lime mb-4 uppercase text-xs tracking-wider">Explore</h4>
            <ul className="space-y-2.5 text-primary-foreground/70">
              <li><a href="#menu" className="hover:text-lime">Menu</a></li>
              <li><a href="#spin" className="hover:text-lime">Spin & Win</a></li>
              <li><a href="#about" className="hover:text-lime">About Us</a></li>
              <li><a href="#locations" className="hover:text-lime">Locations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lime mb-4 uppercase text-xs tracking-wider">Legal</h4>
            <ul className="space-y-2.5 text-primary-foreground/70">
              <li><a href="#" className="hover:text-lime">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-lime">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-lime">Refund Policy</a></li>
              <li><a href="#contact" className="hover:text-lime">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/50">
          <div>© {new Date().getFullYear()} ThandaBro. All rights reserved.</div>
          <div>Made with 🧊 in Noida</div>
        </div>
      </div>
    </footer>
  );
}
