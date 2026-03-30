const milestones = [
  { year: "1930", text: "Otevření hospody Na Rozvoji" },
  { year: "1950", text: "Převzetí státním podnikem" },
  { year: "1990", text: "Uzavření z hygienických důvodů" },
  { year: "1995", text: "Koupě v dražbě novými majiteli" },
  { year: "2025", text: "95 let tradice a zážitků" },
];

const StorySection = () => {
  return (
    <section id="pribeh" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-6">
            Historie
          </p>
          <h2 className="font-display italic text-3xl md:text-5xl text-dark mb-4">
            1930 — 2025
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

        {/* Historic photo - Rozvoj */}
        <div className="mb-16">
          <img
            src="/images/Rozvoj-a-Jurcik-bez-napisu-1024x649.jpg"
            alt="Sídliště Rozvoj a hospoda Na Rozvoji"
            className="w-full max-h-[500px] object-cover"
            loading="lazy"
          />
        </div>

        {/* Story text blocks */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="font-body text-base text-warm-gray leading-relaxed mb-6">
              Ve 20.–30. letech minulého století bylo vybudováno sídliště Rozvoj
              a v roce 1930 byla otevřena hospoda Na Rozvoji (dnešní Kulturní
              zařízení U Jurčíka) se samostatnou místností s kulečníkovým stolem
              a vkusným vybavením, typickým pro 30. léta minulého století.
            </p>
            <p className="font-body text-base text-warm-gray leading-relaxed mb-6">
              Novým majitelem byl pan Glajcar, provozovatelem se stal Maxilián
              Jurčík, kterému na základě výsledku kolaudačního řízení udělil
              okresní úřad v Českém Těšíně povolení pro hostinské a výčepní
              místnosti od 4. října 1930. Tuto hospodu provozoval až do 50. let.
            </p>
            <p className="font-body text-base text-warm-gray leading-relaxed">
              Rodina Glajcarova byla donucena komunistickým režimem prodat
              hospodu státnímu podniku „Restaurace a Jídelny". Novým majitelem
              se stal stát.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <img
              src="/images/U-Jurcika-1970-7x10-1-1024x683.jpg"
              alt="U Jurčíka kolem roku 1970"
              className="w-full h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 bg-dark/80 px-4 py-2">
              <p className="font-display italic text-cream text-sm">
                U Jurčíka, 70. léta
              </p>
            </div>
          </div>
        </div>

        {/* Second block */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative overflow-hidden md:order-1">
            <img
              src="/images/Jurcik-7x10-2022-vyrez-3.jpg"
              alt="Restaurace U Jurčíka dnes"
              className="w-full h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 bg-dark/80 px-4 py-2">
              <p className="font-display italic text-cream text-sm">
                Divadelní 148/2, Český Těšín
              </p>
            </div>
          </div>
          <div className="md:order-2">
            <p className="font-body text-base text-warm-gray leading-relaxed mb-6">
              Příjemná hospůdka se časem změnila na pivnici s nevkusným nábytkem
              s modrým umakartovým obložením. Používání WC bylo jen pro otrlé
              hosty. Než se budova stačila zcela rozpadnout, přišla 90. léta a
              hospoda byla z hygienických důvodů uzavřena.
            </p>
            <p className="font-body text-base text-warm-gray leading-relaxed mb-6">
              Současní majitelé převzali hospodu v roce 1995 prostřednictvím
              dražby. Novým majitelům se díky celkové rekonstrukci podařilo z
              původní ruiny vybudovat vskutku stylovou a útulnou hospodu s
              jedinečnou atmosférou.
            </p>
            <p className="font-body text-base text-warm-gray leading-relaxed">
              Byla přistavěna nová a hodně oblíbená prosklená veranda, přibyl
              „Lovecký salonek", zvětšena a upravena letní zahrádka s příjemným
              posezením pod téměř stoletými kaštany.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
