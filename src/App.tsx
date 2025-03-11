import { useEffect, useRef, useState } from "react";
import "./App.scss";

function MonsterCategoryDropdown() {
  const [foldOut, setFoldOut] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleFoldOut = () => {
    setFoldOut((prev) => !prev);
  };
  return (
    <>
      <div className="dropdownContainer" ref={dropdownRef}>
        <div className={`${foldOut ? "options" : "invisible"}`}>
          <div className="foldOut">
            <button>CookieMonster</button>
            <button>somethingMonster</button>
          </div>
        </div>
        <button className="foldOutButton" onClick={handleFoldOut}>
          v
        </button>
      </div>
    </>
  );
}

type MonsterFormType = {
  nameInput: string;
  surNameInput: string;
  course: string;
  age: number;
};

/* form */
function MonsterForm() {
  //inputState
  const [formInputs, setFormInputs] = useState<MonsterFormType>({
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

  /*  useEffect(() => {
      console.log("FormInputs", formInputs);
    }, [formInputs]); */
  return (
    <>
      <div className="monsterForm__container">
        <form
          className="monsterForm"
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
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
            <MonsterCategoryDropdown />
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
