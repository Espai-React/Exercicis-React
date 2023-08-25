import React from "react";
import "./App.css";
import CB500 from "./CB500.jpg";
import Nav from "./Nav.js";

const App = () => (
  <div className="app">
    <h1>Hello React!!!</h1>
    <Nav />
    <img className="foto" src={CB500} alt="" />
  </div>
);

export default App;
