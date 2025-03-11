import { useEffect, useState } from "react";
import "./App.scss";

type MonsterForm = {
  nameInput: string;
};

/* form */
function MonsterForm() {
  //inputState
  const [nameInput, setNameInput] = useState<string>("");

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameInputElement = e.target;
    setNameInput(nameInputElement.value);
  };

  useEffect(() => {
    console.log("nameInput", nameInput);
  }, [nameInput]);
  return (
    <>
      <div className="monsterForm__container">
        <form className="monsterForm" action="">
          <fieldset className="monsterFieldSet">
            <legend>Lägg till student</legend>
            <label htmlFor="">
              <input
                className="monsterName__input"
                type="text"
                value={nameInput}
                onChange={handleNameInput}
              />
            </label>
            <label htmlFor="">
              <input className="monsterSurname__input" type="text" />
            </label>
            <label htmlFor="">
              <input className="monsterCourse" type="text" />
            </label>
            <label htmlFor="">
              <input className="monsterAge" type="text" />
            </label>
          </fieldset>
        </form>
      </div>
    </>
  );
}

function App() {
  {
  }
  return (
    <>
      <MonsterForm />
    </>
  );
}

export default App;
