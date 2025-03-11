export const monsterData = [
  "Icecream Devourer",
  "Candyking",
  "Cookiemonster",
  "Muschroom Muncher",
  "Jannemonster",
  "Chocklate Charlie",
] as const;

export type MonsterData = (typeof monsterData)[number];
