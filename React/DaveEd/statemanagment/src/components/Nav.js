import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = (props) => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="nav">
      <h2>Dave Ed</h2>
      <p>List of Movies: {movies.length}</p>
    </div>
  );
};

export default Nav;
