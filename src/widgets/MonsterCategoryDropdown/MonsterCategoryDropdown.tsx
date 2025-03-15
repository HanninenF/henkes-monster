import "./MonsterCategoryDropdown.scss";
import { useContext, useRef, useState } from "react";

import { MonsterContext } from "../../Contexts/MonsterContext";
import {
  monsterCategories,
  MonsterCategories,
} from "../../assets/monsterdata/monsterData";

export default function MonsterCategoryDropdown() {
  const context = useContext(MonsterContext);
  const [foldOut, setFoldOut] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (monster: MonsterCategories) => {
    context?.setCategory(monster);
    setFoldOut(false);
  };

  const handleFoldOut = () => {
    setFoldOut((prev) => !prev);
  };
  return (
    <>
      <div className="dropdown__container" ref={dropdownRef}>
        <div> {context?.category.name} </div>
        <button type="button" className="foldOutButton" onClick={handleFoldOut}>
          v
        </button>
        <div className={`${foldOut ? "options" : "invisible"}`}>
          <div className="foldOut">
            {monsterCategories.map((cat, index) => (
              <button
                type="button"
                onClick={() => handleCategoryClick(cat)}
                className="monsterCategory"
                key={`${cat}-${index}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
