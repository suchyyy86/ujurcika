import { useState, useEffect, useCallback } from "react";

const spaces = [
  {
    title: "Restaurace",
    desc: "Tradiční česká restaurace s přátelskou atmosférou a domácí kuchyní.",
    images: [
      "/images/Interier-2.jpg",
      "/images/restaurace-interier-3.jpg",
      "/images/restaurace-vycep.jpg",
      "/images/restaurace-stamgast.jpg",
      "/images/restaurace-tanky.jpg",
      "/images/restaurace-dekorace.jpg",
    ],
  },
  {
    title: "Lovecký salonek",
    desc: "Rodinné oslavy a společenské akce v soukromí stylového salonku. Až 35 osob.",
    images: [
      "/images/salonek-35osob.jpg",
      "/images/salonek-oslava.jpg",
      "/images/salonek-separe.jpg",
      "/images/salonek-akce.jpg",
    ],
  },
  {
    title: "Prosklená veranda",
    desc: "Posezení u dobrého jídla na prosklené a v zimě vyhřívané verandě.",
    images: [
      "/images/veranda-2025.jpg",
      "/images/veranda-2.jpg",
      "/images/veranda-4.jpg",
      "/images/veranda-6.jpg",
      "/images/veranda-7.jpg",
    ],
  },
  {
    title: "Letní zahrádka",
    desc: "Příjemné posezení ve stínu pod téměř stoletými vzrostlými kaštany.",
    images: [
      "/images/zahradka-jaro.jpg",
      "/images/zahradka-2025.jpg",
      "/images/zahradka-4.jpg",
      "/images/zahradka-5.jpg",
    ],
  },
];

const INTERVAL = 4000;

function SpaceCard({
  space,
  offset,
}: {
  space: (typeof spaces)[0];
  offset: number;
}) {
  const [index, setIndex] = useState(0);
  const count = space.images.length;

  const next = useCallback(
    () => setIndex((i) => (i + 1) % count),
    [count],
  );

  useEffect(() => {
    const id = setInterval(next, INTERVAL + offset);
    return () => clearInterval(id);
  }, [next, offset]);

  return (
    <div className="group relative overflow-hidden">
      <div className="aspect-[3/4] relative overflow-hidden">
        {space.images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${space.title} — foto ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent pointer-events-none" />

      {/* Dots */}
      {count > 1 && (
        <div className="absolute top-4 left-0 right-0 flex justify-center gap-1.5 z-10">
          {space.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Foto ${i + 1} z ${count}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-gold w-4"
                  : "bg-cream/40 hover:bg-cream/70"
              }`}
            />
          ))}
        </div>
      )}

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-display italic text-xl text-cream mb-2">
          {space.title}
        </h3>
        <p className="font-body text-sm text-cream/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {space.desc}
        </p>
      </div>
    </div>
  );
}

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
            <SpaceCard key={space.title} space={space} offset={i * 800} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpacesSection;
