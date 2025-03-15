import { useContext, useEffect, useState } from "react";
import MonsterCategoryDropdown from "../MonsterCategoryDropdown/MonsterCategoryDropdown";
import FormInput from "../../components/FormInput/FormInput";
import MonsterType from "../../types/MonsterFormType";
import "./MonsterForm.scss";
import { MonsterContext } from "../../Contexts/MonsterContext";
import { nanoid } from "nanoid";
import {
  monsterCategories,
  MonsterCategoryNames,
} from "../../assets/monsterdata/monsterData";
import icecreamMonster from "../../../public/monsterImages/icecream.webp";

type MonsterFormInputsType = {
  nameInput: string;
  surNameInput: string;
  courseInput: string;
  ageInput: number | null;
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
    ageInput: null,
  });

  const handleMonsterFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedCategoryName: MonsterCategoryNames =
      context?.category.name ?? "Icecream Devourer";

    const selectedCategory = monsterCategories.find(
      (cat) => cat.name === selectedCategoryName
    ) ?? { name: "Icecream Devourer", imageSrc: icecreamMonster };

    const newMonster: MonsterType = {
      name: formInputs.nameInput,
      surName: formInputs.surNameInput,
      course: formInputs.courseInput,
      age: formInputs.ageInput ?? 0,
      category: selectedCategory,
      id: nanoid(),
    };

    context?.setMonsters((prevMonsters) => [...prevMonsters, newMonster]);
    setFormInputs({
      nameInput: "",
      surNameInput: "",
      courseInput: "",
      ageInput: null,
    });
    context?.setCategory({
      name: "Icecream Devourer",
      imageSrc: icecreamMonster,
    });
  };

  const handleMonsterFormInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [name]:
        name === "ageInput" ? (value === "" ? null : Number(value)) : value,
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
            <legend className="monsterLegend">Add student</legend>
            <FormInput
              placeHolder="first name"
              name="nameInput"
              className="monsterName__input formInput"
              type="text"
              value={formInputs.nameInput}
              handleInputChange={handleMonsterFormInputs}
            />
            <FormInput
              placeHolder="surname"
              name="surNameInput"
              className="monsterSurname__input formInput"
              type="text"
              value={formInputs.surNameInput}
              handleInputChange={handleMonsterFormInputs}
            />
            <FormInput
              placeHolder="course"
              name="courseInput"
              className="monsterCourse formInput"
              type="text"
              value={formInputs.courseInput}
              handleInputChange={handleMonsterFormInputs}
            />
            <FormInput
              placeHolder="age"
              name="ageInput"
              className="monsterAge formInput"
              type="number"
              value={formInputs.ageInput ?? ""}
              handleInputChange={handleMonsterFormInputs}
            />
            <MonsterCategoryDropdown />
            <button className="addMonster" type="submit">
              Add monster
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
