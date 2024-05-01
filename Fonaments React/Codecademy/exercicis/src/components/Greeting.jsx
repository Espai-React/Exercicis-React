import React from 'react';

const Greeting = (props) => (
  <div>
    <h2>Salutació</h2>
    <h3>{!props.signedIn ? "Cap a casa!" : `Benvinguda ${props.name}`}</h3>

    {/* <>{!props.signedIn ? <h3>Cap a casa!</h3> : <h3>Benvinguda {props.name}</h3>}</> */}
  </div>
);

export default Greeting;
