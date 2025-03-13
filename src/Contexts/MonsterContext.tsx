import { createContext, useState } from "react";
import MonsterType from "../types/MonsterFormType";

export type MonsterContextType = {
  setMonsters: React.Dispatch<React.SetStateAction<MonsterType[]>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  category: string;
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
  const [category, setCategory] = useState<string>("");

  return (
    <MonsterContext.Provider
      value={{ monsters, setMonsters, category, setCategory }}
    >
      {children}
    </MonsterContext.Provider>
  );
}
