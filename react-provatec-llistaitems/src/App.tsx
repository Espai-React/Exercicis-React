import './App.css';
import { useLlista } from './lib/hooks/useLlista';
import { ElementId } from './types';
import ElementLlista from './components/ElementLlista';
import { useSEO } from './lib/hooks/useSEO';
import { controlInput } from './lib/utils/controlInput';

const App = () => {
  const { llista, afegirElement, esborrarElement } = useLlista();
  llista && console.log('llista -->', llista);

  useSEO({
    titol: `Llista de [${llista.length}] tasques`,
    descripcio: 'Prova tècnica Llista de tasques de React',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const tasca = elements.namedItem('inputTasca');
    const tascaOk = controlInput(tasca);
    if (!tascaOk) return;

    afegirElement(tascaOk.value);
    tascaOk.value = '';
  };

  const crearHandleEsborrarElement = (id: ElementId) => () =>
    esborrarElement(id);

  return (
    <main className='container'>
      <div className='bloc-titol'>
        <h1>Llista de tasques</h1>
        <h4>Afegir i treure elements d'una llista</h4>
      </div>
      <aside className='aside-bloc-form'>
        <form
          className='bloc-form'
          onSubmit={handleSubmit}
          aria-label='formulari'>
          <label htmlFor='inputTasca'>
            Tasca a introduir:
            <input
              id='inputTasca'
              name='inputTasca'
              type='text'
              placeholder='Escriu aquí...'
              required
            />
          </label>
          <button>Afegir</button>
        </form>
      </aside>
      <section className='seccio-llista'>
        <h2>Tasques</h2>
        <div className='bloc-llista'>
          {llista.length ? (
            <ol className='llista'>
              {llista.map(({ id, ...element }) => (
                <ElementLlista
                  key={id}
                  {...element}
                  crearHandleEsborrarElement={crearHandleEsborrarElement(id)}
                />
              ))}
            </ol>
          ) : (
            <p>No hi ha tasques</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default App;
