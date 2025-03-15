import { MonsterCategories } from "../assets/monsterdata/monsterData";

type MonsterType = {
  name: string;
  surName: string;
  course: string;
  age: number;
  category: MonsterCategories;
  id: string;
};
export default MonsterType;
