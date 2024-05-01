import { useAutenticacioContext } from "../context/authContext";
import { useState } from "react";
import { LOGINKEYS } from "../constants/loginKeys";

const Login = () => {
  const { login, isAuthenticated } = useAutenticacioContext();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  console.log(user, password);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(LOGINKEYS);
    if (user === LOGINKEYS.user && password === LOGINKEYS.password) login();
    console.log(isAuthenticated);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setUser(e.target.value)} />
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Inicia sessió</button>
      </form>
    </div>
  );
};

export default Login;
