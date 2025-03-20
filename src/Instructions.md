Här är en strukturerad instruktion för att implementera en **sökruta** i ditt projekt _Henkes Monster_ med **React Router**, där användaren kan söka efter ett monster och få resultaten presenterade på en resultatsida.

---

## 🎯 **Mål**

- Skapa en **sökruta** där användaren kan skriva in ett namn och skicka en sökning.
- Navigera till en **results page** och skicka söktermen via URL (`/results?query=MonsterNamn`).
- Visa matchande monster i results page.

---

## 🔹 **Steg 1: Installera React Router**

Om du inte redan har **React Router**, installera det:

```sh
npm install react-router-dom
```

---

## 🔹 **Steg 2: Lägg till Routing i `App.tsx`**

Öppna `App.tsx` och konfigurera React Router för att hantera sidorna.

### **📌 Vad vi gör här?**

- Lägger till `BrowserRouter`, `Routes` och `Route` för att navigera mellan sidor.
- Skapar tre sidor: `HomePage`, `ResultsPage` och `MonsterDetailsPage`.

```tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import MonsterForm from "./widgets/MonsterForm/MonsterForm";
import MonsterCard from "./widgets/MonsterCard/MonsterCard";
import MonsterContextProvider from "./Contexts/MonsterContext";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import MonsterDetailsPage from "./pages/MonsterDetailsPage";

function App() {
  return (
    <Router>
      <MonsterContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/monster/:monsterId" element={<MonsterDetailsPage />} />
        </Routes>
      </MonsterContextProvider>
    </Router>
  );
}

export default App;
```

---

## 🔹 **Steg 3: Skapa en Sökruta i `SearchBar.tsx`**

Den här komponenten låter användaren skriva in en sökterm och skickar dem till `/results?query=SÖKTERM`.

### **📌 Vad vi gör här?**

- Skapar en `input` för söktermen.
- Använder `useNavigate()` för att **ändra URL:en** vid sökning.

```tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/results?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for a monster..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
```

📌 **Varför `navigate()`?**

- `navigate("/results?query=Monster")` ändrar URL:en och skickar användaren till `/results`.
- `encodeURIComponent()` ser till att specialtecken i söktermen hanteras korrekt.

---

## 🔹 **Steg 4: Lägg till Sökrutan i `HomePage.tsx`**

Integrera `SearchBar` i **din startsida**.

```tsx
import SearchBar from "../components/SearchBar";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Henkes Monster</h1>
      <SearchBar />
    </div>
  );
}
```

---

## 🔹 **Steg 5: Skapa `ResultsPage.tsx` för att Visa Sökresultat**

På denna sida hämtar vi **query-parametern** från URL:en och filtrerar monster från Context.

### **📌 Vad vi gör här?**

- Använder `useSearchParams()` för att **läsa söktermen från URL**.
- Filtrerar monster från `MonsterContext` och visar matchande resultat.

```tsx
import { useSearchParams, Link } from "react-router-dom";
import { useContext } from "react";
import { MonsterContext } from "../Contexts/MonsterContext";

export default function ResultsPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query")?.toLowerCase() || "";
  const context = useContext(MonsterContext);

  const filteredMonsters = context?.monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <h1>Search Results for "{searchQuery}"</h1>
      {filteredMonsters && filteredMonsters.length > 0 ? (
        <ul>
          {filteredMonsters.map((monster) => (
            <li key={monster.id}>
              <Link to={`/monster/${monster.id}`}>
                {monster.name} {monster.surName}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No monsters found.</p>
      )}
    </div>
  );
}
```

📌 **Varför `useSearchParams()`?**

- Den låter oss hämta `query` från URL:en utan att behöva props eller global state.

---

## 🔹 **Steg 6: Skapa `MonsterDetailsPage.tsx` för att Visa Monsterdetaljer**

När en användare klickar på ett sökresultat ska den visas på en separat sida `/monster/:monsterId`.

```tsx
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MonsterContext } from "../Contexts/MonsterContext";

export default function MonsterDetailsPage() {
  const { monsterId } = useParams();
  const context = useContext(MonsterContext);
  const monster = context?.monsters.find((m) => m.id === monsterId);

  if (!monster) {
    return <h2>Monster not found!</h2>;
  }

  return (
    <div>
      <h1>
        {monster.name} {monster.surName}
      </h1>
      <p>Course: {monster.course}</p>
      <p>Age: {monster.age}</p>
      <img src={monster.category.imageSrc} alt={monster.category.name} />
    </div>
  );
}
```

📌 **Varför `useParams()`?**

- Den hämtar `monsterId` från URL:en (`/monster/:monsterId`).

---

## 🎉 **Sammanfattning**

✅ **Steg 1:** Installerade och konfigurerade React Router i `App.tsx`.  
✅ **Steg 2:** Skapade `SearchBar.tsx` för att **skriva in en sökning**.  
✅ **Steg 3:** Navigerade till `/results?query=Monster` via `navigate()`.  
✅ **Steg 4:** Läste söktermen från URL med `useSearchParams()`.  
✅ **Steg 5:** Filtrerade och visade matchande monster i `ResultsPage.tsx`.  
✅ **Steg 6:** Skapade `MonsterDetailsPage.tsx` för att visa detaljer för ett valt monster.

**Nu kan du söka på ett monster och se resultaten dynamiskt uppdateras! 🚀**
