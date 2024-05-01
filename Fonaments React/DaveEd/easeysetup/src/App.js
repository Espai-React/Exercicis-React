import React, { useState } from "react";
import "./App.css";
// import components
import Nav from "./components/Nav";
import Tweets from "./components/Tweets";

/* function App() {
  
return (
    <div className="App">
      <h1>Hola nois!!</h1>
      <div className="home">
        <Nav />
        <Tweets />
      </div>
    </div>
  );
} */

function App() {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const incrementer = () => setCounter((state) => state + 1);
  const toggler = () => setToggle((toggle) => !toggle);

  return (
    <div className="App">
      <button onClick={toggler}>Clica!</button>
      <h1 className={toggle ? "active" : ""}>Hola nois!!</h1>
      <button onClick={incrementer}>Clica!</button>
      <p>Counter: {counter}</p>
      <hr />
      <Nav toggle={toggle} />
      <Tweets setToggle={toggler} number={counter} />
    </div>
  );
}

export default App;
