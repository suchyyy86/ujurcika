import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "O nás", href: "#o-nas" },
  { label: "Jídelní lístek", href: "#menu" },
  { label: "Náš příběh", href: "#pribeh" },
  { label: "Prostory", href: "#prostory" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-dark/95 backdrop-blur-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-cream hover:text-gold transition-colors z-50"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <a href="#" className="absolute left-1/2 -translate-x-1/2">
          <span className={`font-display italic text-cream transition-all duration-500 ${scrolled ? "text-xl" : "text-2xl"}`}>
            U Jurčíka
          </span>
        </a>

        {/* Reservation CTA */}
        <a
          href="tel:+420725961099"
          className="text-sm font-body uppercase tracking-[0.2em] text-gold hover:text-cream transition-colors"
        >
          Rezervace
        </a>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 bg-dark/98 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="font-display text-3xl text-cream hover:text-gold transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="tel:+420725961099"
          className="mt-4 px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-dark transition-all font-body text-sm uppercase tracking-[0.2em]"
        >
          Rezervace
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
