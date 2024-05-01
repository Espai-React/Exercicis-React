import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const Addmovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => setName(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updateId = (e) => setId(e.target.value);
  const Addmovie = (e) => {
    e.preventDefault();
    setMovies(previMovies => [...previMovies, { name: name, price: price, id: id }]);
  }

  return (
    <form className="form" onSubmit={Addmovie}>
      <div>New movie: <input type="text" name="name" value={name} onChange={updateName} /></div>
      <div>New price: <input type="text" name="price" value={price} onChange={updatePrice} /></div>
      <div>New id: <input type="text" name="id" value={id} onChange={updateId} /></div>
      <button className="submit">Submit</button>
    </form>
  )
}

export default Addmovie;
