import { useContext } from "react";
import { AppContext } from "./UseContext";

const Login = () => {

  const { setUsuari } = useContext(AppContext);

  return (
    <div>
      <label htmlFor="">Nom usuari:</label>
      <input type="text" onChange={(e) => setUsuari(e.target.value)} />
    </div>
  );
};

export default Login;
