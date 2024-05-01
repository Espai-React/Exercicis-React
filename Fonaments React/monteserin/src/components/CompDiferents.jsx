import React from 'react';

/* const Component1 = () => (<h3>Component 1</h3>);
export default Component1; */

export const Component2 = (props) => (
  <>
    <h3>Component 2</h3>
    <h5>{props.text}</h5>
  </>
);

export const Component21 = ({ text, dia }) => (
  <>
    <h3>Component 21</h3>
    <h5>{text}. {dia}</h5>
  </>
);

export const Component31 = ({children}) => (
  <>
    <h3>Componen 31</h3>
    <>
      {children}
    </>
  </>
)

export const Component3 = _ => (<h3>Component 3</h3>);

/* export default function Component4() { return (<h3>Component 4</h3>) }; */

export default _ => <h3>Component 5</h3>;



