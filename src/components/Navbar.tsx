import { useState, useEffect } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";

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

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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
          className="text-cream hover:text-gold transition-colors z-[60]"
          aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <a href="#" className="absolute left-1/2 -translate-x-1/2 z-[60]">
          <span className={`font-display italic text-cream transition-all duration-500 drop-shadow-lg ${scrolled ? "text-xl" : "text-2xl"}`}>
            U Jurčíka
          </span>
        </a>

        {/* Obědové menu CTA - prominent */}
        <a
          href="https://www.menicka.cz/4947-kulturni-zarizeni-u-jurcika.html"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gold/90 hover:bg-gold text-dark text-xs font-body uppercase tracking-[0.15em] transition-all z-[60]"
        >
          <UtensilsCrossed size={14} />
          Obědové menu
        </a>

        {/* Mobile: just kontakt link */}
        <a
          href="#kontakt"
          className="md:hidden text-xs font-body uppercase tracking-[0.15em] text-gold hover:text-cream transition-colors z-[60]"
        >
          Kontakt
        </a>
      </div>

      {/* Fullscreen menu overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-dark flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="font-display text-3xl md:text-4xl text-cream/90 hover:text-gold transition-colors"
          >
            {link.label}
          </a>
        ))}

        {/* Obědové menu - prominent in mobile menu */}
        <a
          href="https://www.menicka.cz/4947-kulturni-zarizeni-u-jurcika.html"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="mt-4 inline-flex items-center gap-3 px-8 py-4 bg-gold text-dark font-body text-sm uppercase tracking-[0.2em] hover:bg-gold/80 transition-all"
        >
          <UtensilsCrossed size={18} />
          Obědové menu dnes
        </a>

        <a
          href="tel:+420725961099"
          onClick={() => setIsOpen(false)}
          className="px-8 py-3 border border-cream/30 text-cream/70 hover:border-gold hover:text-gold transition-all font-body text-xs uppercase tracking-[0.2em]"
        >
          +420 725 961 099
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
