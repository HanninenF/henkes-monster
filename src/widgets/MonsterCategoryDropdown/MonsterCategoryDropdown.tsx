import "./MonsterCategoryDropdown.scss";
import { useContext, useRef, useState } from "react";
import { MonsterData, monsterData } from "../../assets/monsterdata/monsterData";
import { MonsterContext } from "../../Contexts/MonsterContext";

export default function MonsterCategoryDropdown() {
  const context = useContext(MonsterContext);
  const [foldOut, setFoldOut] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (monster: MonsterData) => {
    context?.setCategory(monster);
    setFoldOut(false);
  };

  const handleFoldOut = () => {
    setFoldOut((prev) => !prev);
  };
  return (
    <>
      <div className="dropdown__container" ref={dropdownRef}>
        <div> {context?.category} </div>
        <div className={`${foldOut ? "options" : "invisible"}`}>
          <div className="foldOut">
            {monsterData.map((monster, index) => (
              <button
                type="button"
                onClick={() => handleCategoryClick(monster)}
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
