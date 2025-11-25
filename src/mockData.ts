const keywords = [
  'buty sportowe', 'kurtki zimowe', 'sukienki letnie', 'spodnie jeans',
  'okulary słoneczne', 'zegarki damskie', 'torebki skórzane', 'bluzy z kapturem',
  'koszulki polo', 'sandały plażowe', 'czapki zimowe', 'rękawiczki skórzane',
  'szaliki wełniane', 'torby sportowe', 'plecaki szkolne', 'walizki podróżne',
  'parasole składane', 'paski skórzane', 'krawaty męskie', 'biżuteria srebrna',
  'pierścionki zaręczynowe', 'kolczyki złote', 'bransoletki damskie', 'łańcuszki męskie',
  'kosmetyki naturalne', 'kremy przeciwzmarszczkowe', 'szampony organiczne', 'perfumy niszowe',
  'telefony samsung', 'laptopy dell', 'słuchawki bezprzewodowe', 'smartwatche apple',
  'aparaty fotograficzne', 'obiektywy canon', 'statywy fotograficzne', 'lampy pierścieniowe',
  'telewizory oled', 'soundbary dolby', 'konsole playstation', 'gry nintendo',
  'meble ogrodowe', 'grille gazowe', 'hamaki brazylijskie', 'parasole ogrodowe',
  'narzędzia bosch', 'wiertarki akumulatorowe', 'piły tarczowe', 'szlifierki kątowe',
  'odkurzacze robotyczne', 'pralki automatyczne', 'zmywarki cisze', 'lodówki side',
  'ekspresy ciśnieniowe', 'roboty kuchenne', 'blendery smoothie', 'tostery retro'
];

const statuses = ['active', 'paused'] as const;

export const generateData = () => {
  const items = [];
  for (let i = 0; i < 10000; i++) {
    const keyword = keywords[i % keywords.length];
    items.push({
      id: i,
      name: `${keyword} ${Math.floor(i / keywords.length) + 1}`,
      value: Math.random() * 100,
      status: statuses[Math.random() > 0.5 ? 0 : 1]
    });
  }
  return items;
};

