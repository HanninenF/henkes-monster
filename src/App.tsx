import "./App.scss";

function App() {
  /* form */
  function MonsterForm() {
    return (
      <>
        <div className="monsterForm__container">
          <form className="monsterForm" action="">
            <fieldset className="monsterFieldSet">
              <legend>Lägg till student</legend>
              <label htmlFor="">
                <input className="monsterName__input" type="text" />
              </label>
              <label htmlFor="">
                <input className="monsterSurname__input" type="text" />
              </label>
              <label htmlFor="">
                <input className="monsterCourse" type="text" />
              </label>
              <label htmlFor="">
                <input className="monsterAge" type="text" />
              </label>
            </fieldset>
          </form>
        </div>
      </>
    );
  }

  {
  }
  return (
    <>
      <MonsterForm />
    </>
  );
}

export default App;
