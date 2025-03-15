import JanneMonster from "../../../public/monsterImages/Jannemonster.webp";
import candyKing from "../../../public/monsterImages/candyking.webp";
import chocolateCharlie from "../../../public/monsterImages/cholcolatemonster.webp";
import cookieMonster from "../../../public/monsterImages/cookiemonster.webp";
import icecreamMonster from "../../../public/monsterImages/icecream.webp";
import muchromMuncher from "../../../public/monsterImages/mushroommuncher.webp";

export const monsterCategoryNames = [
  "Icecream Devourer",
  "Candyking",
  "Cookiemonster",
  "Muschroom Muncher",
  "Jannemonster",
  "Chocklate Charlie",
] as const;

export type MonsterCategoryNames = (typeof monsterCategoryNames)[number];

/* export const monsterImageNames = [
  icecreamMonster,
  candyKing,
  cookieMonster,
  muchromMuncher,
  JanneMonster,
  chocolateCharlie,
] as const;

export type MonsterImageNames = (typeof monsterImageNames)[number]; */

export type MonsterCategories = {
  name: MonsterCategoryNames;
  imageSrc: string;
};

export const monsterCategories: MonsterCategories[] = [
  { name: "Icecream Devourer", imageSrc: icecreamMonster },
  { name: "Candyking", imageSrc: candyKing },
  { name: "Cookiemonster", imageSrc: cookieMonster },
  { name: "Muschroom Muncher", imageSrc: muchromMuncher },
  { name: "Jannemonster", imageSrc: JanneMonster },
  { name: "Chocklate Charlie", imageSrc: chocolateCharlie },
];
