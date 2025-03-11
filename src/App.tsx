import { useEffect, useState } from "react";
import "./App.scss";

type MonsterForm = {
  nameInput: string;
  surNameInput: string;
  course: string;
  age: number;
};

/* form */
function MonsterForm() {
  //inputState
  const [formInputs, setFormInputs] = useState<MonsterForm>({
    nameInput: "",
    surNameInput: "",
    course: "",
    age: 0,
  });

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameInputElement = e.target;
    setFormInputs({ ...formInputs, nameInput: nameInputElement.value });
  };

  const handleSurNameInput = () => {};

  useEffect(() => {
    console.log("nameInput", formInputs.nameInput);
  }, [formInputs.nameInput]);
  return (
    <>
      <div className="monsterForm__container">
        <form className="monsterForm" action="">
          <fieldset className="monsterFieldSet">
            <legend>Lägg till student</legend>
            <label htmlFor="nameInput">
              <input
                id="nameInput"
                name="nameInput"
                className="monsterName__input"
                type="text"
                value={formInputs.nameInput}
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
