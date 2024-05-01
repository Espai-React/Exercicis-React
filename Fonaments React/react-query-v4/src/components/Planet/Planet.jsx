import styles from "./Planet.module.css";

const Planet = ({ planet }) => (
  <div className={styles.card}>
    <h3>{planet.name}</h3>
    <p>Population - {planet.population}</p>
    <p>Terrain - {planet.terrain}</p>
  </div>
);

export default Planet;
