import { data, temps } from "../../lib/utils/dataTemps";
import c from "./VideoItem.module.css"

const VideoItem = ({ duracio, dataPujada, descripcio }) => {
  return (
    <ul className={c.ul}>
      <li className={c.li}>
        <span className={c.span}>{temps(duracio)}</span>
        <span className={c.span}> - {data(dataPujada)}</span>
      </li>
      <li className={c.li}>
        <span className={c.span}>{descripcio}</span>
      </li>
    </ul>
  );
};

export default VideoItem;
