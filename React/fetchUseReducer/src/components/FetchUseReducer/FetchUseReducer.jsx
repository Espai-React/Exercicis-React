import { useEffect, useReducer, useState } from "react";
import axios from "axios";

const FetchUseReducer = () => {
	const url = "https://hn.algolia.com/api/v1/search?query=$";
	const [peticio, setPeticio] = useState(url + "redux");
	const [valorInput, setValorInput] = useState(null);
	console.log(valorInput);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.inputText.value);
		setPeticio(url + valorInput);
	};

	const dadesFetchReducer = (state, { type, payload }) => {
		switch (type) {
			case "INICI_FETCH":
				return { ...state, carregant: true, error: false };
			case "EXIT_FETCH":
				return {
					...state,
					carregant: false,
					error: false,
					dades: payload,
				};
			case "ERROR_FETCH":
				return { ...state, carregant: false, error: payload };
			default:
				throw new Error();
		}
	};

	const [state, dispatch] = useReducer(dadesFetchReducer, {
		carregant: false,
		error: false,
		dades: { hits: [] },
	});
	const { carregant, error, dades } = state;

	useEffect(() => {
		const controlador = new AbortController();
		const { senyal } = controlador;
		const fetchDades = async () => {
			dispatch({ type: "INICI_FETCH" });
			try {
				const resposta = await axios(peticio, { senyal });
				setTimeout(() => {
					dispatch({
						type: "EXIT_FETCH",
						payload: resposta.data,
					});
				}, 1500);
			} catch (err) {
				dispatch({ type: "ERROR_FETCH", payload: err.message });
			}
		};
		fetchDades();
		return () => controlador.abort();
	}, [peticio]);

	return (
		<div>
			{/* <label htmlFor="inputPeticio">
				Paraula clau
				<input
					type="text"
					placeholder="Escriu la petició..."
					onChange={(e) => setValorInput(e.target.value)}
				/>
			</label>
			<button onClick={() => setPeticio(url + valorInput)}>Cerca...</button> */}
			<form onSubmit={handleSubmit}>
				<label htmlFor="inputPeticio">
					Paraula clau
					<input
						type="text"
						placeholder="Escriu la petició..."
						name="inputText"
						onChange={(e) => setValorInput(e.target.value)}
					/>
				</label>
				<button type="submit">Cerca...</button>
			</form>
			{error ? (
				<div>Error: {error}</div>
			) : carregant ? (
				<div>Carregant dades...</div>
			) : (
				<ul>
					{dades.hits.map((titular) => (
						<div key={titular.objectID}>
							<a href={titular.url}>{titular.title}</a>
						</div>
					))}
				</ul>
			)}
		</div>
	);
};

export default FetchUseReducer;
