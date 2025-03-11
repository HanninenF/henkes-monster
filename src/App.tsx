import { useEffect, useRef, useState } from "react";
import "./App.scss";
import { MonsterData, monsterData } from "./assets/monsterdata/monsterData";

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

type MonsterCategoryDropdownProps = {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

function MonsterCategoryDropdown({
  setCategory,
}: MonsterCategoryDropdownProps) {
  const [foldOut, setFoldOut] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleCategory = (monster: string) => {
    setCategory(monster);
    setFoldOut(false);
  };

  const handleFoldOut = () => {
    setFoldOut((prev) => !prev);
  };
  return (
    <>
      <div className="dropdown__container" ref={dropdownRef}>
        <div className={`${foldOut ? "options" : "invisible"}`}>
          <div className="foldOut">
            {monsterData.map((monster, index) => (
              <button
                type="button"
                onClick={() => handleCategory(monster)}
                className="monsterCategory"
                key={`${monster}-${index}`}
              >
                {monster}
              </button>
            ))}
          </div>
        </div>
        <button type="button" className="foldOutButton" onClick={handleFoldOut}>
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
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  monsters: MonsterType[];
};
/* form */
function MonsterForm({
  setMonsters,
  setCategory,
  category,
  monsters,
}: MonsterFormProps) {
  //inputState
  const [formInputs, setFormInputs] = useState<MonsterFormType>({
    nameInput: "",
    surNameInput: "",
    course: "",
    age: 0,
  });

  const handleMonsterFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMonster: MonsterType = {
      name: formInputs.nameInput,
      surName: formInputs.surNameInput,
      course: formInputs.course,
      age: formInputs.age,
      category: category,
    };

    setMonsters((prevMonsters) => [...prevMonsters, newMonster]);
  };

  const handleMonsterFormInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log("FormInputs", formInputs);
    console.log("monsters", monsters);
  }, [formInputs, monsters]);
  return (
    <>
      <div className="monsterForm__container">
        <form
          className="monsterForm"
          action=""
          onSubmit={handleMonsterFormSubmit}
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
            <MonsterCategoryDropdown setCategory={setCategory} />
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
