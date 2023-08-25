import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const FetchUsuarisAxios = () => {
  const [usuari, setUsuari] = useState({});
  const { name, username, email } = usuari;
  // console.log("pathname", useLocation().pathname);
  const ida = useLocation().pathname.split("/")[2];
  // console.log("ida", ida, "usuari", usuari);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${ida}`, {
        cancelToken: cancelToken.token,
      })
      .then((res) => setUsuari(res.data))
      .catch((error) => {
        if (axios.isCancel(error)) console.log("Avortada la petició");
      });

    return () => {
      // console.log("Cancel·lat");
      cancelToken.cancel();
    };
  }, [ida]);

  return (
    <div>
      <h3>Fetch usuaris axios</h3>
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
        <Link to="/axios">Reset</Link>
      </button>
      <button>
        <Link to="/">Enrere</Link>
      </button>

      {!usuari || !ida ? (
        <p>No hi ha usuaris</p>
      ) : (
        <ul style={{ listStyle: "none" }}>
          Perfil usuari {ida}:<li>Nom: {name}</li>
          <li>Usuari: {username}</li>
          <li>Email: {email}</li>
        </ul>
      )}
    </div>
  );
};

export default FetchUsuarisAxios;
