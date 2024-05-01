import { useState } from "react";

const UseState = () => {
	const [comptador, setComptador] = useState(0);
	const [input, setInput] = useState("Aquí hi va el text...");
	const [search, setSearch] = useState("");

	return (
		<>
			<div>
				<h2>useState</h2>
				<hr />
				<button onClick={() => setComptador(comptador + 1)}>Increment</button>
				<span>{comptador}</span>
				<br />
				<input
					type="text"
					placeholder="Escriu... "
					onChange={(e) => setInput(e.target.value)}
				/>
				<p>{input}</p>
			</div>
			<form
				onSubmit={(e) => {
					console.log(e.target.search.value, e.target.cerca.value);
					e.preventDefault();
					setSearch(e.target.search.value);
				}}>
				<p>useState agafa el valor a través de ‘name’ o 'id'</p>
				<input type="text" name="search" id="cerca" />
				<button type="submit">Buscar</button>
				<p>Resultats per: {search}</p>
			</form>
		</>
	);
};

export default UseState;
