import React from "react";
import { useState } from "react";

const verd = "#39D1B4";
const groc = "#FFD712";

const ToggleColor = () => {
  const [valor, setValor] = useState({ color: verd });
  const canviColor = () => {
    const nouColor = valor.color === verd ? groc : verd;
    setValor({ color: nouColor });
  };
  const estilDiv = { width: "50vw", margin: "10px auto", padding: "10px", background: valor.color };

  return (
    <div style={estilDiv}>
      {/* style={{background: valor.color}} */}
      <h1>Change my color</h1>
      <button onClick={canviColor}>Change color</button>
    </div>
  );
};

export default ToggleColor;
