import "./App.scss";
import MonsterForm from "./widgets/MonsterForm/MonsterForm";
import MonsterContextProvider from "./Contexts/MonsterContext";
import MonsterCard from "./widgets/MonsterCard/MonsterCard";

function App() {
  return (
    <>
      <MonsterContextProvider>
        <MonsterForm />
        <MonsterCard />
      </MonsterContextProvider>
    </>
  );
}

export default App;
