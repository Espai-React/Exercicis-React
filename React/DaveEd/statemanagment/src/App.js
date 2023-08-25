import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import MovieList from "./components/MovieList";
import { MovieProvider } from "./components/MovieContext";
import AddMovie from "./components/Addmovie";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
        <AddMovie />
      </div>
    </MovieProvider>
  );
}

export default App;
