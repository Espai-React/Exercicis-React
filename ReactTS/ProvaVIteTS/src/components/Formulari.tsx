import { useState } from "react";

interface DadesInicials {
	titol: string | null;
	cos: string | null;
}

const DadesFormulariInicials = {
	titol: null,
	cos: null,
};

const Formulari = () => {
	const [dadesFormulari, setDadesFormulari] = useState<DadesInicials>(
		DadesFormulariInicials
	);
	const [pintaDades, setPintaDades] = useState<DadesInicials>(
		DadesFormulariInicials
	);
	const [postEnviat, setPostEnviat] = useState<boolean>(false);

	const { titol: titolInput, cos: cosInput } = dadesFormulari;
	const { titol, cos } = pintaDades;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.id, e.target.value);
		setPostEnviat(false);
		setDadesFormulari({
			...dadesFormulari,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setPintaDades(dadesFormulari);
		setDadesFormulari(DadesFormulariInicials);
		setPostEnviat(true);
	};

	return (
		<>
			<h3>Formulari per crear un post</h3>
			<form id="form" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="titol">
						Titol
						<input
							type="text"
							id="titol"
							value={titolInput ? titolInput : ""}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="cos">
						Cos{" "}
						<input
							type="text"
							id="cos"
							value={cosInput ? cosInput : ""}
							onChange={handleChange}
						/>
					</label>
				</div>
				<button type="submit">Enviar</button>
			</form>
			{postEnviat && (
				<>
					<h4>El Post</h4>
					<p>Títol: {titol}</p>
					<div>
						<p>Cos: {cos}</p>
					</div>
				</>
			)}
		</>
	);
};

export default Formulari;
