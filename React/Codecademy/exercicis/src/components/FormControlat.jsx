import React, { useState } from "react";

const FormControlat = () => {
  const [valor, setValor] = useState("");
  const canviValor = ({ target }) => setValor(target.value);

  return (
    <div>
      <h3>Contingut input: {valor} </h3>
      <p><input type="text" onChange={canviValor} value={valor} /></p>
    </div>
  );
};

export default FormControlat;
