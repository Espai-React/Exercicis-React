import React from 'react';

const EstilInlineVariable = () => {

  const estilp = {
    background: "green",
    color: "white",
  }

  return (
    <div>
      <h3 style={{ background: "red", color: "white"}} >Hola nois</h3>
      <p style={estilp}>Com Anem?</p>
    </div>
  )
}

export default EstilInlineVariable;

