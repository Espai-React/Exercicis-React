import React from "react";
import "./App.css";
import GlobalStyle from "./components/GlobalStyle";
import UseRef from "./components/UseRef";
import UseState from "./components/UseState";
import Component5, {
  Component2,
  Component21,
  Component3,
  Component31,
} from "./components/CompDiferents";
import Condicio from "./components/Condicio";
import CarrusselMar from "./components/CarrusselMar/CarrusselMar";
import {
  Quadrat,
  Rectangle,
  Paragraf,
  /* Password, */ Paragrafs,
} from "./components/componentsStyle";
import Home from "./components/Home";
import Parent from "./components/UseCallback";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <div>
        <UseRef />
        <UseState />
        {/*  <Component1 /> */}
        <Component2 text="Sóc el component 2" />
        <Component21 text="Sóc el component 21" dia="Avui és dia" />
        <Component3 />
        <Component31>
          <p>Més coses...</p>
          <ul>
            Una Llista
            <li>El primer</li>
            <li>El segon</li>
          </ul>
        </Component31>
        {/* <Component4 /> */}
        <Component5 />
        <Condicio />
        <CarrusselMar />
        <Quadrat />
        <Rectangle />
        <Paragraf />
        {/* <Password /> */}
        <Paragrafs />
        <Home />
        <Parent />
        
            </div>
      </div>
  );
}

export default App;
