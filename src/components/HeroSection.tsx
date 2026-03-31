import { ChevronDown, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/Jurcik-7x10-2022-vyrez-3.jpg"
          alt="Kulturní zařízení U Jurčíka — budova restaurace"
          className="w-full h-full object-cover"
          width={1200}
          height={800}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="inline-flex items-center gap-1.5 font-body text-xs uppercase tracking-[0.35em] text-gold mb-4 [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">
          <MapPin size={14} className="opacity-80" />
          Český Těšín
        </p>
        <p className="font-body text-sm md:text-base uppercase tracking-[0.2em] text-cream/80 mb-3 [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">
          Kulturní zařízení
        </p>
        <h1 className="font-display italic text-5xl md:text-7xl lg:text-8xl text-white mb-6 [text-shadow:0_4px_16px_rgba(0,0,0,0.8),0_2px_4px_rgba(0,0,0,0.5)]">
          U Jurčíka
        </h1>
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-px w-12 bg-gold/50" />
          <p className="font-body text-xs uppercase tracking-[0.3em] text-gold [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">
            95 let zážitků, tradic a historie
          </p>
          <span className="h-px w-12 bg-gold/50" />
        </div>
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
