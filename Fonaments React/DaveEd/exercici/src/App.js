import React, { useState } from "react";
import "./App.css";
/* import Hello from "./components/sayHello"; */
import Tweet from "./components/tweet";

/* function App() {
  return (
    <div className="app">
      <h1>Aquest és el component App</h1>
      <Hello />
      <Tweet name="Ramon" message="Hola Ramon" number="27" />
      <Tweet name="Pep" message="Bon dia Pep" number="44"/>
      <Tweet name="Jordi" message="Què tal Jordi" number="222"/>
      <Tweet name="Maria" message="Ei Maria!" number="125"/>
    </div>
  );
} */

/* function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className="app">
      <h1 className={isRed ? "red" : ""}>change my colour</h1>
      <button onClick={increment}>increment</button>
      <h1>{count}</h1>
    </div>
  );
} */

function App() {
  const [users, setUser] = useState([
    { name: "Ed", message: "Hello there", number: 24 },
    { name: "John", message: "I am John Snow", number: 55 },
    { name: "Traversy", message: "I am awesome", number: 125 },
  ]);

  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} number={user.number} />
      ))}
    </div>
  );
}

export default App;
