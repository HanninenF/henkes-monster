/* import { useState } from "react"; */
import "./App.scss";
import MonsterForm from "./widgets/MonsterForm/MonsterForm";
/* import MonsterType from "./types/MonsterFormType"; */
import MonsterContextProvider from "./Contexts/MonsterContext";

function App() {
  /*   const [MONSTERS, setMonsters] = useState<MonsterType[]>([]);
  const [CATEGORY, setCategory] = useState<string>(""); */
  {
  }
  return (
    <>
      <MonsterContextProvider>
        <MonsterForm
        /*  monsters={MONSTERS}
          category={CATEGORY}
          setCategory={setCategory}
          setMonsters={setMonsters} */
        />
        {/* <MonsterCard /> */}
      </MonsterContextProvider>
    </>
  );
}

export default App;
