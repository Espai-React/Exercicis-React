import React from "react";
import { useState, useEffect } from "react";
import registreImatges from "../../assets/img/registreImatges";
import { Container, Img, P } from "./estils";

const CarrusselMar = () => {
  const [imatge, setImatge] = useState({ imatgeActual: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      let actual = imatge.imatgeActual;
      let seguent = ++actual % registreImatges.length;
      setImatge({ imatgeActual: seguent });
    }, 2000);
    return () => clearInterval(interval);
  }, [imatge]);

  const imatgeSrc = registreImatges[imatge.imatgeActual].src;
  const imatgeAlt = registreImatges[imatge.imatgeActual].alt;
  const imatgeTitol = registreImatges[imatge.imatgeActual].titol;

  return (
    <Container className="container">
      <Img className="img" src={imatgeSrc} alt={imatgeAlt} />
      <P className="p">{imatgeTitol}</P>
    </Container>
  );
};

export default CarrusselMar;
