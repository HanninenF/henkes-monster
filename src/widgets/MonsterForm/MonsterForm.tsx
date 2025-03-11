import { useEffect, useState } from "react";
import MonsterCategoryDropdown from "../MonsterCategoryDropdown/MonsterCategoryDropdown";
import FormInput from "../../components/FormInput/FormInput";
import MonsterType from "../../types/MonsterFormType";

type MonsterFormInputsType = {
  nameInput: string;
  surNameInput: string;
  courseInput: string;
  ageInput: number;
};
type MonsterFormProps = {
  setMonsters: React.Dispatch<React.SetStateAction<MonsterType[]>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  monsters: MonsterType[];
};
/* form */
export default function MonsterForm({
  setMonsters,
  setCategory,
  category,
  monsters,
}: MonsterFormProps) {
  //inputState
  const [formInputs, setFormInputs] = useState<MonsterFormInputsType>({
    nameInput: "",
    surNameInput: "",
    courseInput: "",
    ageInput: 0,
  });

  const handleMonsterFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMonster: MonsterType = {
      name: formInputs.nameInput,
      surName: formInputs.surNameInput,
      course: formInputs.courseInput,
      age: formInputs.ageInput,
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
              value={formInputs.courseInput}
              handleInputChange={handleMonsterFormInputs}
            />
            <FormInput
              name="age"
              className="monsterAge"
              type="text"
              value={formInputs.ageInput}
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
