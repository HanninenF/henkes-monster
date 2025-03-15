import "./MonsterCard.scss";
import { useContext } from "react";
import { MonsterContext } from "../../Contexts/MonsterContext";

export default function MonsterCard() {
  //TODO: add monsterCard with state

  const context = useContext(MonsterContext);

  return (
    <>
      <div className="cardContainer">
        {context?.monsters.map((monster) => (
          <div className="card" key={monster.id}>
            <div className="nameWrapper">
              <h2 className="name__h2">
                {monster.name} {monster.surName}
              </h2>
            </div>
            <div className="ageWrapper">
              <h3 className="age__h3"> {monster.age} </h3>
            </div>
            <div className="courseWrapper">
              <h4 className="course__h4"> {monster.course} </h4>
            </div>
            <div className="categoryWrapper">
              <img src={monster.category.imageSrc} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
