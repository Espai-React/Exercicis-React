import LlistaVideos from "../LlistaVideos/LlistaVideos";
import classes from "./Reproduccio.module.css"

const Reproduccio = ({ videos }) => {
  return (
    <div>
      <h2 className={`${classes.titolReproduccio} ${classes.espaiat}`}>Llistes de Reproducció</h2>
      {videos.map(({ titol, curs }, index) => (
        <ul className={classes.llista} key={index}>
          <li className={classes.titolCurs}>{titol}</li>
          {curs.length ? <LlistaVideos curs={curs} /> : <p>No hi ha videos</p>}
        </ul>
      ))}
    </div>
  );
};

export default Reproduccio;
