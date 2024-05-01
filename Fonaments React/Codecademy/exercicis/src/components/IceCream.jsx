import React from "react";
import { useState } from "react";

const IceCream = () => {
  const gelat = "de maduixa";
  const [valor, setValor] = useState("");
  const gelat2 = () => setValor("El gelat que m'agrada és el de vainilla");

  return (
    <div>
      <h2>El gelat que m'agrada és el {gelat}</h2>
      <button onClick={gelat2}>Gelat</button>
      <p>{valor}</p>
    </div>
  );
};

export default IceCream;
