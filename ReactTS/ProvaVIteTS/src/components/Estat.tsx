import { useState } from "react";
import { Usuari } from "../lib/interfaces";

const usuariNou: Usuari = {
	nom: "Mitchel",
	age: 23,
	country: "Germany",
	address: {
		street: "Main st.",
		number: 12,
		city: "Munich",
		zip: 80333,
	},
	admin: false,
};

const Estat = () => {
	const [usuari, setUsuari] = useState<Usuari | null>(null);
	console.log(usuari);

	return (
		<div>
			<button onClick={() => setUsuari(usuariNou)}>Obtenir usuari</button>
			{usuari && <p>{`Benvingut ${usuari.nom}`}</p>}
		</div>
	);
};

export default Estat;
