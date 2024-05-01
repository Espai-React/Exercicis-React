import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import Planets from "./components/Planets/Planets";
import People from "./components/People/People";
import styles from "./App.module.css";

const App = () => {
  const [page, setPage] = useState("planets");

  return (
    <>
      <div className={styles.App}>
        <h1>StarWars Info</h1>
        <NavBar setPage={setPage} />
        <div className={styles.content}>
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </div>
      
    </>
  );
};

export default App;
