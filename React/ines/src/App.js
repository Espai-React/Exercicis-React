import { useEffect } from "react";
import { Contenidor } from "./App.styles";
import Salutacio from "./components/Salutacio/Salutacio";

function App() {
	useEffect(() => {
		document.title = "Prova React";
	});

	return (
		<Contenidor>
			<p>Això és App</p>
			<div>
				<Salutacio />
				<Salutacio />
				<Salutacio />
				<Salutacio />
			</div>
		</Contenidor>
	);
}

export default App;
