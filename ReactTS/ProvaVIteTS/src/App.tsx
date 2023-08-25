import "./App.css";
import {
	DadesDeGent,
	DetallsComprador,
	Estat,
	Formulari,
	Foto,
	Titol,
} from "./components";
import RecollirInput from "./components/RecollirInput";
import ValorInputProvider from "./context/ValorInputProvider";

const textTitol = "React + TS";
//const textExtra = "extra des d'App";
const textExtra = undefined;

const App = () => (
	<ValorInputProvider>
		<Titol textTitol={textTitol} textExtra={textExtra} />
		<hr />
		<Estat />
		<hr />
		<Formulari />
		<hr />
		<RecollirInput />
		<hr />
		<DetallsComprador />
		<hr />
		<DadesDeGent />
		<hr />
		<Foto />
		<hr />
	</ValorInputProvider>
);

export default App;
