import { useState } from "react";
import { UtensilsCrossed } from "lucide-react";

type MenuItem = { name: string; desc?: string; price: string };

const menuDataCZ: Record<string, MenuItem[]> = {
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

const menuDataPL: Record<string, MenuItem[]> = {
  "Jurčíkova kuchnia": [
    { name: "Polędwica wołowa w sosie śmietanowym", desc: "z żurawiną i knedlami", price: "249,-" },
    { name: "Polędwiczki wieprzowe", desc: "kapusta kiszona, knedle", price: "229,-" },
    { name: "Pikantny szaszłyk z grilla Barbecue", desc: "polędwica wieprzowa, kurczak, boczek, kiełbasa, papryka", price: "239,-" },
    { name: "Polędwiczki pakowane w słoninie", desc: "z sosem pieprzowym", price: "209,-" },
    { name: "Golonka wieprzowa", desc: "pieczone do złotego koloru (ok. 900 g)", price: "289,-" },
    { name: "Kluszeczki z bryndzą i słoniną", desc: "350 g", price: "169,-" },
    { name: "Marynowane żeberka wieprzowe", desc: "chrzan, musztarda, piperon, chleb (500 g)", price: "249,-" },
    { name: "Burger wołowy z cheddarem", desc: "karmelizowana cebula, frytki, sos BBQ", price: "239,-" },
    { name: "Sznycel z kurczaka lub wieprzowiny", desc: "150 g", price: "149,-" },
  ],
  "Przekąski piwne": [
    { name: "Tatar wołowy, 2 grzanki", desc: "150 g", price: "229,-" },
    { name: "Grzanka z mięsem ognistym", price: "125,-" },
    { name: "Skrzydełka z kurczaka BBQ", desc: "sos diabelski, pieczywo, 500 g", price: "159,-" },
    { name: "Placki ziemniaczane", desc: "200 g", price: "89,-" },
    { name: "Mix kotlecików drobiowych i wieprzowych", desc: "ogórek kiszony, chleb (600 g)", price: "550,-" },
    { name: 'Kiełbasa z cebulą „utopenec"', desc: "w zalewie octowej, chleb", price: "89,-" },
    { name: "Nasza deska", desc: "wędzone mięso, kiełbasa, ser, piperon", price: "185,-" },
    { name: "Domowe chipsy ziemniaczane", desc: "z pikantnym dipem", price: "85,-" },
  ],
  "Zupy": [
    { name: "Czosnkowa", desc: "szynka, ser, jajko, grzanki", price: "59,-" },
    { name: "Losztycka śmierdziucha", desc: "czosnkowa, kiełbasa, ser ołomuniecki", price: "59,-" },
    { name: "Zupa flaków", desc: "0,4 l", price: "99,-" },
    { name: "Rosół z makaronem", desc: "z kluskami wątrobowymi i warzywami", price: "59,-" },
    { name: "Zupa dnia", price: "45,-" },
  ],
  "Sery, Serki ołomunieckie": [
    { name: "Serki smażone z szynką w panierce na grzance", desc: "1 ks", price: "109,-" },
    { name: "Serki smażone z szynką w panierce", desc: "zestaw surówek (2 ks)", price: "219,-" },
    { name: "Serki z szynką w placku ziemniaczanym", desc: "2 ks", price: "219,-" },
    { name: "Smażony ser", desc: "120 g", price: "149,-" },
    { name: "Ser pleśniowy Camembert w placku ziemniaczanym", desc: "120 g", price: "219,-" },
    { name: "Zapiekane brokuły z sosem serowym", desc: "250 g", price: "119,-" },
  ],
  "Desery": [
    { name: "Naleśniki z nutellą", desc: "i bitą śmietaną (2 ks)", price: "89,-" },
    { name: "Naleśniki z owoców leśnych", desc: "lodami i bitą śmietaną (2 ks)", price: "129,-" },
    { name: "Ciepłe owoce leśne z lodami", desc: "i bitą śmietaną", price: "99,-" },
    { name: "Suflet czekoladowy z lodami", desc: "bitą śmietaną i owocami", price: "85,-" },
    { name: "Łody", desc: "z bitą śmietaną i polewą", price: "75,-" },
  ],
};

const foodImages = [
  "https://ujurcika.cz/wp-content/uploads/elementor/thumbs/Veprove-koleno-WEB-2-r3a1okxrw5l63ehg8tqmk8750qwfujlef9qb05skb4.jpg",
  "https://ujurcika.cz/wp-content/uploads/elementor/thumbs/Cesnekacka2-r3a1okxrw5l63ehg8tqmk8750qwfujlef9qb05skb4.jpg",
  "https://ujurcika.cz/wp-content/uploads/elementor/thumbs/2023-06-17-1-r3a1okxrw5l63ehg8tqmk8750qwfujlef9qb05skb4.jpg",
  "https://ujurcika.cz/wp-content/uploads/elementor/thumbs/Smazak-jurcik-r3a1okxrw5l63ehg8tqmk8750qwfujlef9qb05skb4.jpg",
];

const MenuSection = () => {
  const [lang, setLang] = useState<"cz" | "pl">("cz");
  const menuData = lang === "cz" ? menuDataCZ : menuDataPL;
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleLangSwitch = (newLang: "cz" | "pl") => {
    setLang(newLang);
    const newCategories = Object.keys(newLang === "cz" ? menuDataCZ : menuDataPL);
    setActiveCategory(newCategories[0]);
  };

  return (
    <section id="menu" className="py-24 md:py-32 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-6">
            {lang === "cz" ? "Naše nabídka" : "Nasza oferta"}
          </p>
          <h2 className="font-display italic text-3xl md:text-5xl text-cream mb-4">
            {lang === "cz" ? "Jídelní lístek" : "Karta dań"}
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        {/* Obědové menu banner */}
        <div className="mb-12 flex justify-center">
          <a
            href="https://www.menicka.cz/4947-kulturni-zarizeni-u-jurcika.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold/15 border border-gold/40 hover:bg-gold/25 hover:border-gold transition-all group"
          >
            <UtensilsCrossed size={20} className="text-gold" />
            <div className="text-left">
              <span className="block font-body text-sm uppercase tracking-[0.15em] text-gold group-hover:text-cream transition-colors">
                {lang === "cz" ? "Obědové menu dnes" : "Menu obiadowe dzisiaj"}
              </span>
              <span className="block font-body text-xs text-cream/50 mt-0.5">
                menicka.cz
              </span>
            </div>
            <span className="text-gold text-lg ml-2">→</span>
          </a>
        </div>

        {/* Language toggle */}
        <div className="flex justify-center gap-1 mb-12">
          <button
            onClick={() => handleLangSwitch("cz")}
            className={`px-5 py-2 font-body text-xs uppercase tracking-[0.15em] transition-all ${
              lang === "cz"
                ? "bg-gold/20 text-gold border border-gold/40"
                : "text-cream/40 border border-cream/10 hover:text-cream/70 hover:border-cream/30"
            }`}
          >
            Česky
          </button>
          <button
            onClick={() => handleLangSwitch("pl")}
            className={`px-5 py-2 font-body text-xs uppercase tracking-[0.15em] transition-all ${
              lang === "pl"
                ? "bg-gold/20 text-gold border border-gold/40"
                : "text-cream/40 border border-cream/10 hover:text-cream/70 hover:border-cream/30"
            }`}
          >
            Po polsku
          </button>
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
          {menuData[activeCategory]?.map((item, i) => (
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

        {/* Tip */}
        <div className="mt-16 text-center max-w-lg mx-auto p-6 border border-cream/10">
          <p className="font-display italic text-lg text-cream mb-2">Tip pro Vás</p>
          <p className="font-body text-sm text-cream/70">
            Tankové pivo sebou (platba pouze v hotovosti)
          </p>
          <p className="font-body text-sm text-gold mt-1">
            4 piva (PET 2 l) — 165,- Kč
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
