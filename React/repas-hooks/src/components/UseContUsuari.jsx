import { useContext } from "react";
import { AppContext } from "./UseContext";

const Usuari = () => {
  const { usuari } = useContext(AppContext);

  return (
    <div>
      <p>Usuari registrat: {usuari}</p>
    </div>
  );
};

export default Usuari;
