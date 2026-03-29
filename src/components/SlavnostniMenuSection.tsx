import { Phone } from "lucide-react";

type MenuItem = { name: string; desc?: string; weight?: string; price: string };

const slavnostniMenu: Record<string, MenuItem[]> = {
  Přípitek: [
    { name: "Metropol, citron", weight: "0,1 l", price: "40,-" },
    { name: "Prosecco", weight: "0,1 l", price: "30,-" },
    {
      name: "Slivovice, Spišská hruška s hruškou",
      weight: "0,04 l",
      price: "40,-",
    },
  ],
  Předkrm: [
    {
      name: "Šunková rolka",
      desc: "křenová šlehačka, bagetka",
      price: "85,-",
    },
    {
      name: "Prosciutto, mozzarella",
      desc: "cherry rajče, bagetka",
      price: "99,-",
    },
  ],
  Polévka: [
    {
      name: "Hovězí vývar",
      desc: "s játrovými knedlíčky a domácími nudlemi",
      price: "65,-",
    },
    {
      name: "Slepičí vývar",
      desc: "s masem a domácími nudlemi",
      price: "65,-",
    },
  ],
  "Hlavní chod": [
    {
      name: "Kořeněný špíz Barbecue",
      desc: "panenka, kuřecí, klobása, slanina, cibule",
      weight: "250 g",
      price: "239,-",
    },
    {
      name: "Špalíčky z vepřové panenky",
      desc: "ve slaninovém kabátě s pepřovou omáčkou",
      weight: "200 g",
      price: "229,-",
    },
    {
      name: "Královská kotleta",
      desc: "kotleta, mleté maso, vejce",
      weight: "200 g",
      price: "229,-",
    },
    {
      name: "Medvědí tlapka",
      desc: "pikantní nakládaná kotleta",
      weight: "200 g",
      price: "199,-",
    },
    {
      name: "Moravský vrabec",
      desc: "zelí, knedlík",
      weight: "200 g",
      price: "199,-",
    },
    {
      name: "Svíčková na smetaně",
      desc: "vídeňský knedlík, brusinky, šlehačka",
      weight: "200 g",
      price: "249,-",
    },
    {
      name: "Kuřecí nebo vepřová kapsa plněná",
      desc: "dle výběru",
      weight: "200 g",
      price: "209,-",
    },
    {
      name: "Krutí rolka",
      desc: "se sýrem, šunkou a hráškem",
      weight: "200 g",
      price: "229,-",
    },
    {
      name: "Medailonky z vepřové panenky",
      desc: "na žampionovém ragú",
      weight: "200 g",
      price: "229,-",
    },
    {
      name: "Kuřecí stehenní steak",
      desc: "na bylinkách",
      weight: "200 g",
      price: "189,-",
    },
    {
      name: "Hovězí guláš",
      desc: "knedlík",
      weight: "200 g",
      price: "229,-",
    },
    {
      name: "Pečené kachní stehno",
      desc: "červené a bílé zelí, bramborový knedlík",
      weight: "200 g",
      price: "350,-",
    },
  ],
  Přílohy: [
    { name: "Vařený brambor", price: "55,-" },
    { name: "Hranolky", price: "55,-" },
    { name: "Pečené brambory", price: "65,-" },
    { name: "Opékaný brambor", price: "59,-" },
    { name: "Bramborové tolárky", price: "59,-" },
    {
      name: "Šťouchaný brambor",
      desc: "se slaninou a cibulí",
      price: "65,-",
    },
  ],
  Raut: [
    {
      name: "Řízečky vepřové, kuřecí",
      weight: "50 g",
      price: "45,-",
    },
    { name: "Pečené koleno", weight: "1 kg", price: "289,-" },
    {
      name: "Marinované kuřecí špalíky",
      weight: "100 g",
      price: "38,-",
    },
    { name: "Jelito, jitrnice", weight: "100 g", price: "39,-" },
    { name: "Grilované plněné žampiony", weight: "1 ks", price: "30,-" },
    { name: "Tatarský biftek", weight: "150 g", price: "229,-" },
    { name: "Zeleninová obloha", weight: "200 g", price: "75,-" },
    { name: "Ohnivé maso", weight: "150 g", price: "169,-" },
    {
      name: "Zelný salát dle výběru",
      weight: "150 g",
      price: "45,-",
    },
    {
      name: "Pečená královská krkovice",
      weight: "1 kg",
      price: "450,-",
    },
    { name: "Grilovaná žebra", weight: "500 g", price: "249,-" },
    {
      name: "Špíz vepřový nebo kuřecí",
      weight: "100 g",
      price: "89,-",
    },
    { name: "Hovězí guláš", weight: "150 g", price: "179,-" },
    { name: "Smažené sýry", weight: "120 g", price: "149,-" },
    {
      name: "Obložená mísa dle výběru",
      weight: "1 kg",
      price: "490,-",
    },
    { name: "Těstovinový salát", weight: "200 g", price: "85,-" },
    { name: "Smažené květáčky", weight: "150 g", price: "99,-" },
    { name: "Talíř ovoce", weight: "1 ks", price: "210,-" },
  ],
};

const categories = Object.keys(slavnostniMenu);

const SlavnostniMenuSection = () => {
  return (
    <section id="slavnostni-menu" className="py-24 md:py-32 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-6">
            Pro Vaši oslavu
          </p>
          <h2 className="font-display italic text-3xl md:text-5xl text-dark mb-4">
            Slavnostní menu
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="font-body text-base text-warm-gray">
            Pro 8 a více osob — pouze jednotné jídlo
          </p>
        </div>

        {/* Menu categories */}
        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat}>
              <h3 className="font-display italic text-xl text-dark mb-6 text-center">
                {cat}
              </h3>
              <div className="max-w-2xl mx-auto">
                {slavnostniMenu[cat].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-baseline gap-2 py-3 border-b border-dark/10 last:border-0"
                  >
                    <div className="flex-1">
                      <span className="font-display text-lg text-dark">
                        {item.name}
                      </span>
                      {item.desc && (
                        <span className="font-body text-sm text-warm-gray ml-2">
                          — {item.desc}
                        </span>
                      )}
                      {item.weight && (
                        <span className="font-body text-xs text-warm-gray/60 ml-2">
                          {item.weight}
                        </span>
                      )}
                    </div>
                    <span className="font-body text-sm text-gold whitespace-nowrap">
                      {item.price} Kč
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-16 max-w-2xl mx-auto text-center space-y-3">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="font-body text-sm text-warm-gray">
            Tato jídla Vám připravíme pro 8 a více osob.
          </p>
          <p className="font-body text-sm text-warm-gray">
            V případě vlastního alkoholu účtujeme 100,- Kč/os.
          </p>
          <p className="font-body text-sm text-warm-gray">
            Účtujeme kuvér 30,- Kč/os.
          </p>
          <div className="pt-6">
            <a
              href="tel:+420776000077"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-dark font-body text-sm uppercase tracking-[0.15em] hover:bg-gold/80 transition-colors"
            >
              <Phone size={16} />
              Info: 776 000 077
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlavnostniMenuSection;
