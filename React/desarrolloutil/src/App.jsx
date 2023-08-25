import classes from "./App.module.scss";
import FormControlat from "./components/FormControlat";
import Likes from "./components/Likes";
import Reproduccio from "./components/Reproduccio/Reproduccio";
import { videos } from "./lib/data/videos"
import SearchNoControlat from "./components/Search";
import UseEffect from "./components/UseEffect";
import UseEffect2 from "./components/UseEffect2";
import Cleanup from "./components/Cleanup";
import Cleanup2 from "./components/Clenaup2";
import Pausa from "./components/Pausa";

const App = () => {
  console.log("Render App");
  return (
    <div className={classes.container}>
      <Likes likesInicials={15} />
     {/*  <Reproduccio videos={videos} /> */}
      <SearchNoControlat />
      <FormControlat />
      <UseEffect />
      <UseEffect2 />
      <Cleanup />
      <Cleanup2 />
      <Pausa/>
    </div>
  );
};

export default App;
