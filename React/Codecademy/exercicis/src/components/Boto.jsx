import React from "react";

const Boto = (props) => {
  
    return (
    <>
      <button onClick={props.siClica}>{props.textBoto}</button>
      <h3>{props.valor}</h3>
    </>
  );
};

Boto.defaultProps = { textBoto: "Clica ara!" };
export default Boto;
