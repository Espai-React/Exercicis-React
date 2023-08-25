import { Link } from 'react-router-dom';
import { LOGIN } from '../config/routes/paths';

const Home = () => {
  return <div>
    <h2>Benvinguts</h2>
    <Link to={LOGIN}>Iniciar Sessió</Link>
  </div>
};

export default Home;
