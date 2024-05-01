import React from 'react';

const Random = () => {
  const n = Math.floor(Math.random() * 10 + 1);

  return (
    <h1>The number is {n} !</h1>
  )
}

export default Random;