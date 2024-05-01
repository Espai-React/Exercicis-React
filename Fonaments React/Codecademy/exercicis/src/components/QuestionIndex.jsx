import React, { useState } from "react";

const QuestionIndex = () => {
  const [index, setIndex] = useState(0);
  const inici = index === 0;
  const final = index === 5;

  const endavant = () => setIndex((index) => index + 1);
  const enrere = () => setIndex((index) => index - 1);

  return (
    <div>
      <h2>Pregunta número: {index}</h2>
      <button onClick={endavant} disabled={final}>
        Endavant
      </button>
      <button onClick={enrere} disabled={inici}>
        Enrere
      </button>
    </div>
  );
};

export default QuestionIndex;
