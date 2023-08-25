import React, { useState } from "react";
import styled, { css } from "styled-components";

const ampladaMinEscriptori = 996;
//const escriptori = `@media (min-width: ${ampladaMinEscriptori}px)`;
const mobil = `@media (max-width: ${ampladaMinEscriptori}px)`;

const QuadratS = styled.div`
  margin: 25px auto;
  width: 70px;
  height: 70px;
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 10px;
    padding: 0 10px;
  }

  &:hover {
    background: red;
  }

  ${mobil} {
    width: 100%;
  }
`;

const RectangleS = styled(QuadratS)`
  width: 200px;
`;

export const Quadrat = () => (
  <QuadratS className="quadrat">
    <p>Sóc un quadrat</p>
  </QuadratS>
);

export const Rectangle = () => (
  <RectangleS className="rectangle">
    <p>Sóc un rectangle</p>
  </RectangleS>
);

const Fons = styled.div`
  background-color: ${({ isRight }) => (isRight ? "green" : "red")};
  padding: 10px;
`;

export const Paragraf = () => {
  const [isRight, setIsRight] = useState();

  return (
    <Fons className="fons" isRight={isRight}>
      <button onClick={() => setIsRight(!isRight)}>Clica!</button>
      <p>Aquest paràgraf canvia de fons</p>
    </Fons>
  );
};

/* const InputS = styled.input.attrs(props => ({
  type: "password",
  maxLength: props.myMaxLength || 5
}))`
  color: red;
  margin: 10px 0;
  `;

export const Password = () => (
  <InputS className="input" myMaxLength={12}></InputS>
); */

const BigText = css`
  font-size: 20px;
`;

const RedText = styled.div`
  background: green;
  ${BigText};
`;

const BlueText = styled.div`
  background: blue;
  ${BigText};
`;

export const Paragrafs = () => (
  <div>
    <RedText className="redText">
      <p>Hola gent</p>
    </RedText>
    <BlueText className="blueText">
      <p>Hola altre cop</p>
    </BlueText>
  </div>
);

