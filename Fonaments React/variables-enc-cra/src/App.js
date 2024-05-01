import './App.css';

function App() {

  const connexioAPI = () => {
    console.log("Connexió API");
    console.log(`Clau API:${process.env.REACT_APP_API_KEY}`);
  }
  return (
    <div className="App">
      <h2>Variables d'ambient</h2>
      <button onClick={connexioAPI}>Connectar . . .</button>
    </div>
  );
}

export default App;
