import React, { useState } from "react";

const ColorPickerArray = () => {
  const colorNames = [
    "Aquamarine",
    "BlueViolet",
    "Chartreuse",
    "CornflowerBlue",
    "Thistle",
    "SpringGreen",
    "SaddleBrown",
    "PapayaWhip",
    "MistyRose",
  ];

  const [color, setColor] = useState("Tomato");
  const divStyle = {
    backgroundColor: color,
    margin: "10px auto",
    width: "80vw",
    padding: "10px",
  };

  return (
    <div style={divStyle}>
      <h3>Color Seleccionat: {color}</h3>
      {colorNames.map((colorName, index) => (
        <button key={index}  onClick={() => setColor(colorName)}>{colorName}</button>
      ) )}
    </div>
  )
};

export default ColorPickerArray;
