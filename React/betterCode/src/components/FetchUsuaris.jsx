import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const FetchUsuaris = () => {
  const [usuari, setUsuari] = useState({});
  const { name, username, email } = usuari;
  //  console.log("pathname", useLocation().pathname);
  const id = useLocation().pathname.split("/")[2];
  // console.log("id", id, "usuari", usuari);

  /* const [id, setId] = useState(null);

  const handleId = ({target: {id: idUsuari}}) => {
    setId(idUsuari);
  }; */

  useEffect(() => {
    // let cancel·lat = false;
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
      .then((res) => res.json())
      .then(
        (data) => setUsuari(data)
        /* {
            if (!cancel·lat) {
              setUsuari(data);
              // console.log(data);
            } */
      )
      .catch((error) => {
        if (error.name === "AbortError") console.log("Avortada la petició");
      });

    return () => {
      // console.log("Cancel·lat");
      //cancel·lat = true;
      controller.abort();
    };
  }, [id]);

  return (
    <div>
      <h3>Fetch usuaris</h3>
      {/* <button id="1" onClick={handleId}>
        Usuari 1
      </button>
      <button id="2" onClick={handleId}>
        Usuari 2
      </button>
      <button id="3" onClick={handleId}>
        Usuari 3
      </button> */}
      <button>
        <Link to="/users/1">Usuari 1</Link>
      </button>
      <button>
        <Link to="/users/2">Usuari 2</Link>
      </button>
      <button>
        <Link to="/users/3">Usuari 3</Link>
      </button>
      <button>
        <Link to="/fetch">Reset</Link>
      </button>
      <button>
        <Link to="/">Enrere</Link>
      </button>

      {!usuari || !id ? (
        <p>No hi ha usuaris</p>
      ) : (
        <ul style={{ listStyle: "none" }}>
          Perfil usuari {id}:<li>Nom: {name}</li>
          <li>Usuari: {username}</li>
          <li>Email: {email}</li>
        </ul>
      )}
    </div>
  );
};

export default FetchUsuaris;
