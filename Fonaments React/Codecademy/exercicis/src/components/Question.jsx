import React from "react";

const Question = (props) => (
  <div>
    <p>{props.pregunta}</p>
    <input type="text" value="Yes" readOnly/>
    <input type="text" value="No" readOnly/>
    <br />
    <br />
  </div>
);

export default Question;
