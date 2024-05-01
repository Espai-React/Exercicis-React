import VideoItem from "../VideoItem/VideoItem";
import classes from "./LlistaVideos.module.css"

const LlistaVideos = ({ curs }) => {
  return (
    <div>
      {curs.map(({ titolVideo, duracio, dataPujada, descripcio }, index) => (
        <ul key={index}>
          <li className={classes.titolVideo}>{titolVideo}</li>
          <VideoItem
            duracio={duracio}
            dataPujada={dataPujada}
            descripcio={descripcio}
          />
        </ul>
      ))}
    </div>
  );
};

export default LlistaVideos;
