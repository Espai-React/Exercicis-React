import { useState } from "react";
import SalaXat from "./SalaXat";

const ChatCanviFons = () => {
	const [fonsFosc, setFonsFosc] = useState(false);
	const [servidor, setServidor] = useState("http://localhost:5678");
	const [select, setSelect] = useState(null);
	//console.log("fonsFosc", fonsFosc, "servidor", servidor, "select", select);

	const opcions = {
		servidor,
		select
	}

	return (
		<div
			style={{
				background: fonsFosc ? "black" : "white",
				color: fonsFosc ? "white" : "black",
				padding: 10,
				borderRadius: 10,
			}}>
			<h3>Xat canvi fons</h3>
			<button onClick={() => setFonsFosc(!fonsFosc)}>Canvi fons</button>
			<label htmlFor="inputServer">
				URL Servidor:{" "}
				<input
					type="text"
					id="inputServer"
					value={servidor}
					onChange={({ target: { value } }) => setServidor(value)}
				/>
			</label>
			<label htmlFor="selectSala">
				Selecciona la sala{" "}
				<select
					name=""
					id="selectSala"
					value={select ?? ""}
					onChange={({ target: { value } }) => setSelect(value)}>
					<option value="">Selecciona Sala</option>
					<option value="general">General</option>
					<option value="viatges">Viatges</option>
					<option value="musica">Música</option>
				</select>
			</label>
			<SalaXat opcions={opcions} />
		</div>
	);
};

export default ChatCanviFons;
