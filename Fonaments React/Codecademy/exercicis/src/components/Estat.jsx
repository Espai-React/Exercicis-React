import React from "react";
import { useState } from "react";

const Estat = () => {
  const [valor] = useState({
    title: "Best App!",
    velocitat: "ràpida",
  });
  //const valor = { title: "Best App!", velocitat: "ràpida" };

  const setVelocitat = () => (valor.velocitat = "lenta");
  const lent = Math.random() < 0.5;

  return (
    <div>
      <h3>
        Hola, estat de 'Estat': &nbsp;
        <span>
          {valor.title} amb velocitat {valor.velocitat} però potser canviant a {lent ? setVelocitat() : valor.velocitat}
        </span>
      </h3>
    </div>
  );
};

export default Estat;
