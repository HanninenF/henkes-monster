import { useContext, useEffect, useState } from "react";
import MonsterCategoryDropdown from "../MonsterCategoryDropdown/MonsterCategoryDropdown";
import FormInput from "../../components/FormInput/FormInput";
import MonsterType from "../../types/MonsterFormType";
import { MonsterContext } from "../../Contexts/MonsterContext";
import { nanoid } from "nanoid";

type MonsterFormInputsType = {
  nameInput: string;
  surNameInput: string;
  courseInput: string;
  ageInput: number;
};

/* form */
export default function MonsterForm() {
  //context
  const context = useContext(MonsterContext);

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
      category: context?.category,
      id: nanoid(),
    };

    context?.setMonsters((prevMonsters) => [...prevMonsters, newMonster]);
    setFormInputs({
      nameInput: "",
      surNameInput: "",
      courseInput: "",
      ageInput: 0,
    });
    context?.setCategory("Candyking");
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
    console.log("monsters", context?.monsters);
  }, [formInputs, context?.monsters]);
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
              name="courseInput"
              className="monsterCourse"
              type="text"
              value={formInputs.courseInput}
              handleInputChange={handleMonsterFormInputs}
            />
            <FormInput
              name="ageInput"
              className="monsterAge"
              type="text"
              value={formInputs.ageInput}
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
