import React from "react";

const Llista = (props) => {
  let titol = `Favourite ${props.tipus}`;
  props.children instanceof Array && (titol += "s");

  return (
    <div>
      <h1>{titol}</h1>
      <ul>{props.children}</ul>
    </div>
  );
}

export default Llista;