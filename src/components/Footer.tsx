import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-cream/10">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-display italic text-2xl text-cream mb-2">
              U Jurčíka
            </p>
            <p className="font-body text-sm text-warm-gray">
              Kulturní zařízení od roku 1930
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-gold mb-6">
              Navigace
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "O nás", href: "#o-nas" },
                { label: "Jídelní lístek", href: "#menu" },
                { label: "Náš příběh", href: "#pribeh" },
                { label: "Prostory", href: "#prostory" },
                { label: "Kontakt", href: "#kontakt" },
                { label: "Obědové menu", href: "https://www.menicka.cz/4947-kulturni-zarizeni-u-jurcika.html" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-body text-sm text-cream/60 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-gold mb-6">
              Kontakt
            </p>
            <address className="not-italic">
              <p className="font-body text-sm text-cream/80 mb-1">Divadelní 148/2</p>
              <p className="font-body text-sm text-cream/80 mb-4">737 01 Český Těšín</p>
              <a
                href="tel:+420725961099"
                className="font-body text-sm text-gold hover:text-cream transition-colors"
              >
                +420 725 961 099
              </a>
            </address>
            <div className="mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=100063642426495"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cream/60 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10 py-6">
        <p className="font-body text-xs text-cream/30 text-center">
          © 2026 Kulturní zařízení U Jurčíka. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
