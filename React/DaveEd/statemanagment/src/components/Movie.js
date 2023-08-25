import React from "react";

const Movie = ({name, price, id}) => {
  return (
    <div>
      <h3>Name: {name}:</h3>
      <ul>
        <li>Price: {price}</li>
        <li>Number: {id}</li>
      </ul>
    </div>
  );
};

export default Movie;
