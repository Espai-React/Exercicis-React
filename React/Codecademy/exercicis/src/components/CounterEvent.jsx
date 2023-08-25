import React, { useState, useEffect } from "react";

const CounterEvent = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((counter) => counter + 1);
  useEffect(() => {
    const boto = document.querySelector("#boto");
    boto.addEventListener("mousedown", increment);
    return () => boto.removeEventListener("mousedown", increment);
  });

  return (
    <div>
      <p>Has clicat 'Ei!'{counter}</p>
      <button id="boto" onClick={increment}>
        Clicat Ei!
      </button>
    </div>
  );
};

export default CounterEvent;
