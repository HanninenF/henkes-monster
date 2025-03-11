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

  const handleMonsterFormInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log("FormInputs", formInputs);
  }, [formInputs]);
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
                onChange={handleMonsterFormInputs}
              />
            </label>
            <label htmlFor="surNameInput">
              <input
                id="surNameInput"
                name="surNameInput"
                value={formInputs.surNameInput}
                onChange={handleMonsterFormInputs}
                className="monsterSurname__input"
                type="text"
              />
            </label>
            <label htmlFor="course">
              <input
                id="course"
                name="course"
                value={formInputs.course}
                onChange={handleMonsterFormInputs}
                className="monsterCourse"
                type="text"
              />
            </label>
            <label htmlFor="age">
              <input
                id="age"
                name="age"
                value={formInputs.age}
                onChange={handleMonsterFormInputs}
                className="monsterAge"
                type="text"
              />
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
