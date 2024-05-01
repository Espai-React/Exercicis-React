import axios from "axios";
import { useEffect, useState } from "react";

const UseEffect = () => {
	const [dades, setDades] = useState([]);
	const [comptador, setComptador] = useState(1);
	const [nom, setNom] = useState("");
	const [amplada, setAmplada] = useState(0);

	const handleComptador = () => {
		if (comptador === 10) setComptador(1);
		else setComptador(comptador + 1);
	};

	useEffect(() => {
		//console.log("1");
		axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
			const resposta = response.data;
			setDades(resposta);
			if (resposta.length > 0) setNom(resposta[comptador - 1].name);
		});
	}, []);

	useEffect(() => {
		//console.log("2");
		if (dades.length > 0) {
			setNom(dades[comptador - 1].name);
		}
	}, [comptador]);

	useEffect(() => {
		const actualitzarAmplada = () => {
			const ampladaFinestra = document.body.clientWidth;
			setAmplada(ampladaFinestra);
		};
		actualitzarAmplada();
		window.addEventListener("resize", actualitzarAmplada);
		return () => removeEventListener("resize", actualitzarAmplada);
	}, []);

	return (
		<div>
			<h2>useEffect</h2>
			<hr />
			<p>{nom}</p>
			<button onClick={handleComptador}>Comptador</button>
			<span>{comptador}</span>
			<p>
				Amplada de la finestra: <span>{amplada} píxels</span>
			</p>
		</div>
	);
};

export default UseEffect;
