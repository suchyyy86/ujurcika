const spaces = [
  {
    title: "Restaurace",
    desc: "Tradiční česká restaurace s přátelskou atmosférou a domácí kuchyní.",
    image: "/images/Interier-2.jpg",
  },
  {
    title: "Lovecký salonek",
    desc: "Rodinné oslavy a společenské akce v soukromí stylového salonku.",
    image:
      "/images/Budova-Jurcik-JPG.jpg",
  },
  {
    title: "Prosklená veranda",
    desc: "Posezení u dobrého jídla na prosklené a v zimě vyhřívané verandě.",
    image: "/images/Veranda5-1.jpg",
  },
  {
    title: "Letní zahrádka",
    desc: "Příjemné posezení ve stínu pod téměř stoletými vzrostlými kaštany.",
    image:
      "/images/Jurcik-7x10-2022-vyrez-3.jpg",
  },
];

const SpacesSection = () => {
  return (
    <section id="prostory" className="py-24 md:py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-6">
            Naše prostory
          </p>
          <h2 className="font-display italic text-3xl md:text-5xl text-cream mb-4">
            U nás se budete cítit jako doma
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaces.map((space, i) => (
            <div
              key={i}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display italic text-xl text-cream mb-2">
                  {space.title}
                </h3>
                <p className="font-body text-sm text-cream/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {space.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpacesSection;
