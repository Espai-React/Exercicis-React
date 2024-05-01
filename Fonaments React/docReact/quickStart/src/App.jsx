import "./App.css";
import Bloc_Botó_Input from "./components/Bloc_Botó_Input";
import Condicio from "./components/Condicio";
import Perfil from "./components/Perfil"; 
import { useState } from "react";
import Llista from "./components/Llista";
import DobleBotó from "./components/DobleBotó";
import DobleComptadorJunt from "./components/DobleComptadorJunt";

	const productes = [
		{ nom: "Cogombre", ésFruita: false, id: 1 },
		{ nom: "Pastanaga", ésFruita: false, id: 2 },
		{ nom: "Poma", ésFruita: true, id: 3 },
	];

const App = () => {
	const [botoApp, setBotoAppState] = useState(true);
	console.log("botoApp", botoApp);
	const [text, setText] = useState("");
	console.log(text);
	const [comptador, setComptador] = useState(0)

	const handleClick = () => {
		setBotoAppState(!botoApp);
		setComptador(comptador + 1);
	};

	const handleChange = (e) => {
		setText(e.target.value);
	}

	return (
		<div
			style={{
				border: botoApp ? "5px solid darkviolet" : "5px solid forestgreen",
				padding: "20px",
				borderRadius: "15px",
			}}>
			<h2>Benvinguts a l'App</h2>
			<Bloc_Botó_Input
				handleClick={handleClick}
				handleChange={handleChange}
				text={text}
				comptador={comptador}
			/>
			<p>Comptador clics: {comptador}</p>
			<p>Text: {text}</p>
			<Perfil />
			<Condicio />
			<hr />
			<Llista productes={productes} />
			<DobleBotó />
			<DobleComptadorJunt setComptador={setComptador} comptador={comptador} />
		</div>
	);
};

export default App;
