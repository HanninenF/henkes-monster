import { useState } from "react";
import "./App.scss";
import MonsterForm from "./widgets/MonsterForm/MonsterForm";
import MonsterType from "./types/MonsterFormType";

function App() {
  const [MONSTERS, setMonsters] = useState<MonsterType[]>([]);
  const [CATEGORY, setCategory] = useState<string>("");
  {
  }
  return (
    <>
      <MonsterForm
        monsters={MONSTERS}
        category={CATEGORY}
        setCategory={setCategory}
        setMonsters={setMonsters}
      />
      {/* <MonsterCard /> */}
    </>
  );
}

export default App;
