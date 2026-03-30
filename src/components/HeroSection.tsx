import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/Jurcik-7x10-2022-vyrez-3.jpg"
          alt="Kulturní zařízení U Jurčíka — budova restaurace"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/60 to-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-6 drop-shadow-lg">
          Český Těšín
        </p>
        <h1 className="font-display italic text-5xl md:text-7xl lg:text-8xl text-white mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          Od roku 1930
        </h1>
        <p className="font-display text-xl md:text-2xl text-white/90 mb-2 drop-shadow-lg">
          Kulturní zařízení U Jurčíka
        </p>
        <p className="font-body text-sm text-cream/80 tracking-wider mt-4 drop-shadow-lg">
          95 let zážitků, tradic a historie
        </p>
      </div>

      {/* Scroll indicator */}
      <a
        href="#o-nas"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/60 hover:text-gold transition-colors"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.3em]">
          Objevte více
        </span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
