import GraellaUsuaris from "./GraellaUsuaris";

interface Usuari {
	id: number;
	nom: string;
	cognom: string;
	edat: number;
}

interface Comanda {
	id: number;
	quantitat: number;
	volum: number;
}

const DadesDeGent = () => {
	const usuaris: Usuari[] = [
		{ id: 1, nom: "Joan", cognom: "Gracia", edat: 62 },
		{ id: 2, nom: "Maria", cognom: "Camprubí", edat: 32 },
		{ id: 3, nom: "Pere", cognom: "Miravet", edat: 19 },
	];

	const comandes: Comanda[] = [
		{ id: 1, quantitat: 5, volum: 75 },
		{ id: 2, quantitat: 2, volum: 20 },
		{ id: 3, quantitat: 1, volum: 40 },
	];

	return (
		<div>
			<h3>Usuaris en JSON.stringify(usuari)</h3>
			<div>
				<GraellaUsuaris<Usuari> elements={usuaris} />
			</div>
			<div>
				<GraellaUsuaris<Comanda> elements={comandes}/>
			</div>
		</div>
	);
};

export default DadesDeGent;
