import './ElementLlista.css';

const ElementLlista = ({
  timestamp,
  text,
  crearHandleEsborrarElement,
}: {
  timestamp: string;
  text: string;
  crearHandleEsborrarElement: () => void;
}) => (
  <div className='bloc-element-llista'>
    <li>
      {timestamp} - {text}
    </li>
    <button onClick={crearHandleEsborrarElement}>Esborrar</button>
  </div>
);

export default ElementLlista;
