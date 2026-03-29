const milestones = [
  { year: "1930", text: "Založení hospody v Českém Těšíně" },
  { year: "1960", text: "Přestavba a rozšíření prostor" },
  { year: "1990", text: "Obnova tradice po revoluci" },
  { year: "2010", text: "Modernizace kuchyně a interiéru" },
  { year: "2025", text: "95 let tradice a zážitků" },
];

const StorySection = () => {
  return (
    <section id="pribeh" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-6">
            Naše historie
          </p>
          <h2 className="font-display italic text-3xl md:text-5xl text-dark mb-4">
            Náš příběh
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gold/30" />

          <div className="grid md:grid-cols-5 gap-8 md:gap-4">
            {milestones.map((m, i) => (
              <div key={i} className="text-center relative">
                {/* Dot */}
                <div className="hidden md:block w-3 h-3 rounded-full bg-gold mx-auto mb-4" />
                <p className="font-display text-2xl text-gold mb-2">{m.year}</p>
                <p className="font-body text-sm text-warm-gray leading-relaxed">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Story text + image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body text-base text-warm-gray leading-relaxed mb-6">
              Kulturní zařízení U Jurčíka je tradiční česká hospoda s téměř
              stoletou historií. Od svého založení v roce 1930 prošla mnoha
              proměnami, ale vždy si zachovala svou přátelskou atmosféru
              a pohostinnost.
            </p>
            <p className="font-body text-base text-warm-gray leading-relaxed mb-6">
              Dnes nabízíme nejen výtečnou domácí kuchyni a znamenité tankové
              pivo, ale i jedinečné prostory — od útulného Loveckého salonku
              po letní zahrádku ve stínu stoletých kaštanů.
            </p>
            <p className="font-body text-base text-warm-gray leading-relaxed">
              Na vaši návštěvu se těší celý kolektiv profesionálů Kulturního
              zařízení U Jurčíka.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <img
              src="https://ujurcika.cz/wp-content/uploads/2025/03/Jurcik-7x10-2022-vyrez-3.jpg"
              alt="Budova U Jurčíka"
              className="w-full h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 bg-dark/80 px-4 py-2">
              <p className="font-display italic text-cream text-sm">
                Divadelní 148/2, Český Těšín
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
