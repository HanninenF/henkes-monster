import { useEffect, useRef, useState } from "react";
import "./App.scss";

export type MonsterType = {
  name: string;
  surName: string;
  course: string;
  age: number;
  category: string;
};

type FormInputProps = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  className: string;
  type: string;
  value: string | number;
};

function FormInput({
  value,
  handleInputChange,
  name,
  className,
  type,
}: FormInputProps) {
  return (
    <label htmlFor={name}>
      <input
        id={name}
        name={name}
        className={className}
        type={type}
        value={value}
        onChange={handleInputChange}
      />
    </label>
  );
}

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
type MonsterFormProps = {
  setMonsters: React.Dispatch<React.SetStateAction<MonsterType[]>>;
};
/* form */
function MonsterForm({ setMonsters }: MonsterFormProps) {
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

  useEffect(() => {
    console.log("FormInputs", formInputs);
  }, [formInputs]);
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
            <FormInput
              name="nameInput"
              className="monsterName__input"
              type="text"
              value={formInputs.nameInput}
              handleInputChange={handleMonsterFormInputs}
            />
            <FormInput
              name="surNameInput"
              className="monsterSurname__input"
              type="text"
              value={formInputs.surNameInput}
              handleInputChange={handleMonsterFormInputs}
            />
            <FormInput
              name="course"
              className="monsterCourse"
              type="text"
              value={formInputs.course}
              handleInputChange={handleMonsterFormInputs}
            />
            <FormInput
              name="age"
              className="monsterAge"
              type="text"
              value={formInputs.age}
              handleInputChange={handleMonsterFormInputs}
            />
            <MonsterCategoryDropdown />
            <button type="submit">Lägg till</button>
          </fieldset>
        </form>
      </div>
    </>
  );
}

function MonsterCard() {
  //TODO: add monsterCard with state
}

function App() {
  const [monsters, setMonsters] = useState<MonsterType[]>([]);
  {
  }
  return (
    <>
      <MonsterForm setMonsters={setMonsters} />
      {/* <MonsterCard /> */}
    </>
  );
}

export default App;
