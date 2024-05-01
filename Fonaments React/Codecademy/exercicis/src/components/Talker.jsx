import React from "react";
import Boto from "./Boto";
import { useState } from "react";

const Talker = () => {
  const [valor, setValor] = useState("");

  const handleClick = () => {
    let discurs = "";
    for (let i = 0; i < 200; i++) {
      discurs += "blabla...";
    }
    valor === "" ? setValor(discurs) : setValor ("");
  };

  return (
    <div>
      <Boto siClica={handleClick} valor={valor}/>
    </div>
  );
};

export default Talker;
