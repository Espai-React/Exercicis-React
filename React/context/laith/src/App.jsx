import { CompteProvider } from './context/CompteContext';
import './App.css';
import Comptador from './components/Comptador';

const App = () => (
  <CompteProvider>
    <div className='app'>
      <h2>Context Laith</h2>
      <Comptador />
    </div>
  </CompteProvider>
);

export default App;
