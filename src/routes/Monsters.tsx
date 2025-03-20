import { Outlet } from "react-router-dom";
import MonsterCard from "../widgets/MonsterCard/MonsterCard";
import MonsterForm from "../widgets/MonsterForm/MonsterForm";
import MonsterDetails from "./MonsterDetails";

export default function Monsters() {
  return (
    <div>
      <h1>Monsters</h1>
      <MonsterForm />
      <MonsterCard />

      {/* <MonsterDetails /> */}
    </div>
  );
}
