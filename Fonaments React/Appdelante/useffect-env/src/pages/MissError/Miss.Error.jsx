import { useNavigate } from "react-router-dom";
import style from './MissError.module.css'

const MissError = () => {
  
  const navega = useNavigate();

  return (
    <div className={style.misError}>
      <button onClick={() => navega(process.env.PUBLIC_URL)}>Tornar</button>
      <p>Error 404</p>
    </div>
  );
};
export default MissError;
