import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("green");
  const divStyle = { backgroundColor: color, margin: "10px auto", width: "80vw", padding: "10px" };

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor("Aquamarine")}>Aquamarine</button>
      <button onClick={() => setColor("BlueViolet")}>BlueViolet</button>
      <button onClick={() => setColor("Chartreuse")}>Chartreuse</button>
      <button onClick={() => setColor("CornflowerBlue")}>CornFlowerBlue</button>
    </div>
  );
};

export default ColorPicker;
