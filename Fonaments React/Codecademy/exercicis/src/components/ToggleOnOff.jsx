import React, { useState } from "react";

const ToggleOnOff = () => {
  const [toggle, setToggle] = useState(true);
  
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        Toggle!
      </button>
      <h4>Estat de Toggle: {toggle === true ? "on" : "off"}</h4>
    </div>
  );
};

export default ToggleOnOff;

