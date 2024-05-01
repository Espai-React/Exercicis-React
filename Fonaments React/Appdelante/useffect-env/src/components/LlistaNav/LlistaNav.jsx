import { EnvLink as Link } from '../../components/EnvLink';
import "./LlistaNav.css";

const Inici = () => {
  return (
    <div className="inici">
      <ul>
        <li>
          <Link className="link" to="/">
            Inici
          </Link>
        </li>
        <li>
          <Link className="link" to="/bloc">
            Bloc
          </Link>
        </li>
        <li>
          {/* <Link to="/producte/7">Producte</Link> */}
          <Link className="link" to="/producte?id=8">
            Producte
          </Link>
        </li>
        <li>
          <Link className="link" to="/formulari">
            Formulari
          </Link>
        </li>
        <li>
          <Link className="link" to="/error">
            Error de la URL
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Inici;
