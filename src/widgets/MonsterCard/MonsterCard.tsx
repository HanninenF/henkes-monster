import "./MonsterCard.scss";
import { useContext } from "react";
import { MonsterContext } from "../../Contexts/MonsterContext";

export default function MonsterCard() {
  //TODO: add monsterCard with state

  const context = useContext(MonsterContext);

  return (
    <>
      {context?.monsters.map((monster) => (
        <div className="cardContainer" key={monster.id}>
          <div className="nameWrapper">
            <h2>
              {monster.name} {monster.surName}
            </h2>
          </div>
          <div className="ageWrapper">
            <h3> {monster.age} </h3>
          </div>
          <div className="courseWrapper">
            <h4> {monster.course} </h4>
          </div>
          <div className="categoryWrapper"> {monster.category} </div>
        </div>
      ))}
    </>
  );
}
