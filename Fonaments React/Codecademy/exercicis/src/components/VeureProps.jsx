import React from 'react';

const VeureProps = (props) => {

  const stringProps = JSON.stringify(props); 

  return (
    <div>
      <h3>Remenem les Props</h3> 
      <p>{stringProps}</p>
      <p>El neu nom: {props.nom}</p>
      <p>My info:{props.myInfo[1]}</p>
    </div>
  )
}

export default VeureProps;

