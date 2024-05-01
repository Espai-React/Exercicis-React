import styles from "./Person.module.css";

const Person = ({ person }) => (
  <div className={styles.card}>
    <h3>{person.name}</h3>
    <p>Gender - {person.gender}</p>
    <p>Birth - {person.birth_year}</p>
  </div>
);

export default Person;
