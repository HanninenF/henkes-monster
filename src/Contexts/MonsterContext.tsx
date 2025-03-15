import { createContext, useState } from "react";
import MonsterType from "../types/MonsterFormType";
import {
  monsterCategories,
  MonsterCategories,
} from "../assets/monsterdata/monsterData";

export type MonsterContextType = {
  setMonsters: React.Dispatch<React.SetStateAction<MonsterType[]>>;
  setCategory: React.Dispatch<React.SetStateAction<MonsterCategories>>;
  category: MonsterCategories;
  monsters: MonsterType[];
};

export const MonsterContext = createContext<MonsterContextType | null>(null);

type MonsterContextProviderProps = {
  children: React.ReactNode;
};

export default function MonsterContextProvider({
  children,
}: Readonly<MonsterContextProviderProps>) {
  const [monsters, setMonsters] = useState<MonsterType[]>([]);
  const [category, setCategory] = useState<MonsterCategories>(
    monsterCategories[0]
  );

  return (
    <MonsterContext.Provider
      value={{ monsters, setMonsters, category, setCategory }}
    >
      {children}
    </MonsterContext.Provider>
  );
}
