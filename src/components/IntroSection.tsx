const IntroSection = () => {
  return (
    <section id="o-nas" className="py-24 md:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-6">
          Vítejte u nás
        </p>
        <h2 className="font-display italic text-3xl md:text-5xl text-dark mb-8">
          Tradice, která spojuje generace
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mb-8" />
        <p className="font-body text-base md:text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto mb-6">
          Navštivte naše „Kulturní zařízení u Jurčíka" a zakuste jedinečnou atmosféru
          v naší restauraci s dlouholetou tradicí. Nabízíme příjemné posezení v tradiční
          české hospodě, výtečnou domácí kuchyni a znamenité tankové pivo.
        </p>
        <p className="font-body text-base md:text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto">
          O obsluhu se postará příjemný a vždy usměvavý personál. V létě si užijte
          posezení ve stínu stoletých kaštanů, v zimě i létě ve stylové verandě.
        </p>
      </div>

      {/* Feature images */}
      <div className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-6">
        <div className="relative overflow-hidden group">
          <img
            src="https://ujurcika.cz/wp-content/uploads/2025/03/Interier-2.jpg"
            alt="Interiér restaurace U Jurčíka"
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark/80 to-transparent">
            <p className="font-display italic text-xl text-cream">Tradiční interiér</p>
          </div>
        </div>
        <div className="relative overflow-hidden group">
          <img
            src="https://ujurcika.cz/wp-content/uploads/elementor/thumbs/Veprove-koleno-WEB-2-r3a1okxrw5l63ehg8tqmk8750qwfujlef9qb05skb4.jpg"
            alt="Vepřové koleno — specialita U Jurčíka"
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark/80 to-transparent">
            <p className="font-display italic text-xl text-cream">Domácí kuchyně</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
