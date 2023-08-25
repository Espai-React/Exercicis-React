/* import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return <div>La id és: {id}</div>;
}; */

import { useLocation, useNavigate } from "react-router-dom";
import styles from './Producte.module.css';

const Producte = () => {
  const peticio = new URLSearchParams(useLocation().search);
  const id = peticio.get("id");
  const navega = useNavigate();

  return (
    <div className={styles.producte}>
      <button onClick={() => navega(process.env.PUBLIC_URL)}>Tornar</button>
      <p>la id és: {id}</p>
    </div>
  );
};

export default Producte;
