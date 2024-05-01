import { useState } from "react";
import CompFill from "./Components/CompFill";

function App() {
	const [valor, setValor] = useState("Hola");

	const handleValor = () => {
		if (valor === "Hola") setValor("Adéu");			
		else setValor("Hola")

	};

	return (
		<div>
			App
			<CompFill valor={valor} handleValor={handleValor} />
		</div>
		
	);
}

export default App;
