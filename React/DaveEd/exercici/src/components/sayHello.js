import React from 'react'

function Hello() {
  const sayHello = () => console.log('Hola nois');

  return (
    <div>
      <h3>Aquest és el component Hello</h3>
      <button onClick={sayHello}>Clica!</button>
    </div>
  );
}

export default Hello;