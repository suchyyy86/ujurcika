import { MapPin, Phone, Clock, Facebook, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-6">
            Přijďte nás navštívit
          </p>
          <h2 className="font-display italic text-3xl md:text-5xl text-dark mb-4">
            Kontakt
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Address */}
          <div className="text-center">
            <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-6">
              <MapPin size={22} className="text-gold" />
            </div>
            <h3 className="font-display italic text-xl text-dark mb-3">
              Adresa
            </h3>
            <address className="not-italic">
              <p className="font-body text-base text-warm-gray leading-relaxed">
                Rozvojová 748/2
              </p>
              <p className="font-body text-base text-warm-gray leading-relaxed">
                737 01 Český Těšín
              </p>
            </address>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-6">
              <Phone size={22} className="text-gold" />
            </div>
            <h3 className="font-display italic text-xl text-dark mb-3">
              Telefon
            </h3>
            <a
              href="tel:+420725961099"
              className="font-body text-base text-warm-gray hover:text-gold transition-colors"
            >
              +420 725 961 099
            </a>
            <p className="font-body text-sm text-warm-gray/70 mt-2">
              Rezervace stolů i telefonicky
            </p>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-6">
              <Mail size={22} className="text-gold" />
            </div>
            <h3 className="font-display italic text-xl text-dark mb-3">
              E-mail
            </h3>
            <a
              href="mailto:restauraceujurcika@seznam.cz"
              className="font-body text-base text-warm-gray hover:text-gold transition-colors break-all"
            >
              restauraceujurcika@seznam.cz
            </a>
          </div>

          {/* Hours */}
          <div className="text-center">
            <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-6">
              <Clock size={22} className="text-gold" />
            </div>
            <h3 className="font-display italic text-xl text-dark mb-3">
              Otevírací doba
            </h3>
            <div className="font-body text-base text-warm-gray leading-relaxed space-y-1">
              <p>Po — Čt: 10:00 — 22:00</p>
              <p>Pá: 10:00 — 23:00</p>
              <p>So: 11:00 — 23:00</p>
              <p>Ne: 11:00 — 21:00</p>
            </div>
          </div>
        </div>

        {/* Map + social */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Map embed */}
          <div className="overflow-hidden bg-dark/5 min-h-[300px]">
            <iframe
              src="https://maps.google.com/maps?q=%C4%8Cesk%C3%BD%20T%C4%9B%C5%A1%C3%ADn%20Rozvojova%20748&t=m&z=17&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa — U Jurčíka, Rozvojová 748, Český Těšín"
            />
          </div>

          {/* Info card */}
          <div className="bg-dark p-8 md:p-12 flex flex-col justify-center">
            <p className="font-display italic text-2xl text-cream mb-6">
              Těšíme se na Vaši návštěvu
            </p>
            <p className="font-body text-base text-cream/70 leading-relaxed mb-8">
              Nabízíme možnost rezervace stolů pro rodinné oslavy, srazy, výročí
              i firemní akce. Soukromé prostory Loveckého salonku pojmou až 30
              osob.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+420725961099"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-dark font-body text-sm uppercase tracking-[0.15em] hover:bg-gold/80 transition-colors"
              >
                <Phone size={16} />
                Zavolat
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063642426495"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-cream/30 text-cream font-body text-sm uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-colors"
              >
                <Facebook size={16} />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
