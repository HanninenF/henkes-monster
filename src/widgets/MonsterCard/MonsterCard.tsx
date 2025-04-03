import "./MonsterCard.scss";
import { useContext } from "react";
import { MonsterContext } from "../../Contexts/MonsterContext";
import { Link, Outlet } from "react-router-dom";

export default function MonsterCard() {
  //TODO: add monsterCard with state

  const context = useContext(MonsterContext);
  if (!context) return null;

  const { deleteMonster } = context;

  return (
    <>
      <ul
        className={
          (context?.monsters ?? []).length > 0 ? "cardContainer" : "invisible"
        }
      >
        {context?.monsters.map((monster) => (
          <li key={monster.id}>
            <Link to={monster.id} className="card">
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
              <button onClick={() => deleteMonster(monster.id)}>x</button>
            </Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  );
}
