import React from "react";
import { useState } from "react";

const Mood = () => {
  const [valor, setValor] = useState({ mood: "good" });
  const toggleMood = () => {
    const stateMood = (valor.mood === "bad") ? "good" : "bad";
    setValor({ mood: stateMood });
    console.log(valor);
  };

  return (
    <div>
      <h1>I'm feeling {valor.mood}</h1>
      <button onClick={toggleMood}>Clica Mood!</button>
    </div>
  )
};

export default Mood;
