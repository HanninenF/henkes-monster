import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MonsterContext } from "../Contexts/MonsterContext";

export default function MonsterDetails() {
  const params = useParams();
  const context = useContext(MonsterContext);
  if (!context) return null;

  const monster =
    context?.monsters.find((monster) => monster.id === params.monsterId) ??
    null;
  return (
    <div>
      <h1>MonsterDetails</h1>
      {monster && (
        <div key={monster.id} className="card">
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
      )}
    </div>
  );
}
