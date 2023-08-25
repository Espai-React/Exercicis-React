import { useNavigate } from "react-router-dom";
import Contenidor from "../../components/Contenidor/Contenidor";
import style from './Bloc.module.css';

const Bloc = () => {

  const navega = useNavigate();

  return (
    <div className={style.bloc}>
      <button onClick={() => navega(process.env.PUBLIC_URL)}>Tornar</button>
      <Contenidor />
    </div>
  );
}

export default Bloc;
