import { Link } from "react-router-dom";
import { LOGOUT } from "../config/routes/paths";

const Private = () => {
  return (
    <div>
      <h2>El meu espai Privat</h2>
      <Link to={LOGOUT}>Tancar sessió</Link>
    </div>
  );
};

export default Private;
