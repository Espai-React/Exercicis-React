import { useState } from 'react';

const SearchNoControlat = () => {
  const [search, setSearch] = useState(""); 
  return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearch(e.target.search.value);
          }}>
          <input type="text" name="search" autoComplete="off" />
          <button type="submit">Buscar</button>
          <p>Resultats per: {search}</p>
        </form> )
}

export default SearchNoControlat;
