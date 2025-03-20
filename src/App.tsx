import "./App.scss";
import MonsterForm from "./widgets/MonsterForm/MonsterForm";
import MonsterContextProvider from "./Contexts/MonsterContext";
import MonsterCard from "./widgets/MonsterCard/MonsterCard";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import HOME from "./routes/HOME";
import Results from "./routes/Results";
import RootLayout from "./layout/rootlayout";
import Monsters from "./routes/Monsters";
import MonsterDetails from "./routes/MonsterDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HOME />,
      },
      {
        path: "/results",
        element: <Results />,
      },
      {
        path: "/monsters",
        element: <Monsters />,
        children: [
          {
            path: "/monsters/:monsterId",
            element: <MonsterDetails />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <MonsterContextProvider>
        <RouterProvider router={router} />
      </MonsterContextProvider>
    </>
  );
}

export default App;
