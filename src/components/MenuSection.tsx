import { useState } from "react";

type MenuItem = { name: string; desc?: string; price: string };

const menuData: Record<string, MenuItem[]> = {
  "Jurčíkova kuchyně": [
    { name: "Svíčková na smetaně", desc: "s brusinkami a houskovým knedlíkem", price: "249,-" },
    { name: "Vepřo - knedlo - zelo", desc: "z vepřové panenky", price: "229,-" },
    { name: "Kořeněný špíz Barbecue", desc: "vepřová panenka, kuřecí maso, slanina, klobása, paprika", price: "239,-" },
    { name: "Špalíčky z vepřové panenky", desc: "ve slaninovém kabátku s pepřovou omáčkou", price: "209,-" },
    { name: "Vepřové koleno", desc: "pečené do červena (cca 900 g)", price: "289,-" },
    { name: "Halušky s brynzou", desc: "a opečenou slaninou 350 g", price: "169,-" },
    { name: "Marinovaná vepřová žebra", desc: "křen, hořčice, piperon, chléb (500 g)", price: "249,-" },
    { name: "Hovězí burger s čedarem", desc: "karamelizovaná cibulka, hranolky, BBQ omáčka", price: "239,-" },
    { name: "Kuřecí nebo vepřový řízek", desc: "150 g", price: "149,-" },
  ],
  "Pochoutky k pivu": [
    { name: "Tatarský biftek s topinkami", desc: "2 ks", price: "229,-" },
    { name: "Ohnivé maso s topinkou", price: "125,-" },
    { name: "Kuřecí křídla Barbecue", desc: "ďábelská omáčka, pečivo", price: "159,-" },
    { name: "Bramborák", desc: "200 g", price: "89,-" },
    { name: "Mix řízečků", desc: "kyselá okurka, chléb (600 g)", price: "550,-" },
    { name: "Utopenec s cibulí a chlebem", price: "89,-" },
    { name: "Naše prkénko", desc: "uzené maso, klobása, sýr, piperon", price: "185,-" },
    { name: "Domácí bramborové chipsy", desc: "s pikantním dipem", price: "85,-" },
  ],
  "Polévky": [
    { name: "Česneková", desc: "šunka, sýr, vejce, krutony", price: "59,-" },
    { name: "Loštická smrďula", desc: "česneková s klobásou a tvarůžkem", price: "59,-" },
    { name: "Držťková s chlebem", desc: "0,4 l", price: "99,-" },
    { name: "Vývar s nudlemi", desc: "játrové knedlíčky a zelenina", price: "59,-" },
    { name: "Dle denní nabídky", price: "45,-" },
  ],
  "Sýry a tvarůžky": [
    { name: "Smažený tvarůžek", desc: "se šunkou v těstíčku na topince (1 ks)", price: "109,-" },
    { name: "Smažené tvarůžky", desc: "se šunkou v těstíčku a oblohou (2 ks)", price: "219,-" },
    { name: "Tvarůžky se šunkou v bramboráku", desc: "2 ks", price: "219,-" },
    { name: "Smažený sýr", desc: "120 g", price: "149,-" },
    { name: "Camembert v bramboráku", desc: "120 g", price: "219,-" },
    { name: "Zapečená brokolice", desc: "se sýrovou omáčkou (250 g)", price: "119,-" },
  ],
  "Dezerty": [
    { name: "Palačinka s nutelou", desc: "šlehačka (2 ks)", price: "89,-" },
    { name: "Palačinky s lesním ovocem", desc: "zmrzlina a šlehačka (2 ks)", price: "129,-" },
    { name: "Teplé lesní ovoce", desc: "se zmrzlinou a šlehačkou", price: "99,-" },
    { name: "Čokoládové suflé", desc: "se zmrzlinou, šlehačkou a ovocem", price: "85,-" },
    { name: "Zmrzlinový pohár", desc: "se šlehačkou a polevou", price: "75,-" },
  ],
};

const foodImages = [
  "https://ujurcika.cz/wp-content/uploads/elementor/thumbs/Veprove-koleno-WEB-2-r3a1okxrw5l63ehg8tqmk8750qwfujlef9qb05skb4.jpg",
  "https://ujurcika.cz/wp-content/uploads/elementor/thumbs/Cesnekacka2-r3a1okxrw5l63ehg8tqmk8750qwfujlef9qb05skb4.jpg",
  "https://ujurcika.cz/wp-content/uploads/elementor/thumbs/2023-06-17-1-r3a1okxrw5l63ehg8tqmk8750qwfujlef9qb05skb4.jpg",
  "https://ujurcika.cz/wp-content/uploads/elementor/thumbs/Smazak-jurcik-r3a1okxrw5l63ehg8tqmk8750qwfujlef9qb05skb4.jpg",
];

const categories = Object.keys(menuData);

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="menu" className="py-24 md:py-32 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-6">
            Naše nabídka
          </p>
          <h2 className="font-display italic text-3xl md:text-5xl text-cream mb-4">
            Jídelní lístek
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        {/* Food images strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
          {foodImages.map((src, i) => (
            <div key={i} className="overflow-hidden aspect-square">
              <img
                src={src}
                alt="Jídlo z naší kuchyně"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs md:text-sm uppercase tracking-[0.15em] px-4 py-2 transition-all ${
                activeCategory === cat
                  ? "text-gold border-b-2 border-gold"
                  : "text-cream/50 hover:text-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="max-w-2xl mx-auto">
          {menuData[activeCategory].map((item, i) => (
            <div
              key={i}
              className="flex items-baseline gap-2 py-4 border-b border-cream/10 last:border-0"
            >
              <div className="flex-1">
                <span className="font-display text-lg text-cream">{item.name}</span>
                {item.desc && (
                  <span className="font-body text-sm text-warm-gray ml-2">
                    — {item.desc}
                  </span>
                )}
              </div>
              <span className="font-body text-sm text-gold whitespace-nowrap">
                {item.price} Kč
              </span>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <a
            href="https://ujurcika.cz/polsky/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm uppercase tracking-[0.15em] text-cream/50 hover:text-gold transition-colors"
          >
            🇵🇱 Menu po polsku
          </a>
          <span className="text-cream/20 hidden sm:inline">|</span>
          <a
            href="https://www.menicka.cz/4947-kulturni-zarizeni-u-jurcika.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm uppercase tracking-[0.15em] text-cream/50 hover:text-gold transition-colors"
          >
            Obědové menu →
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
