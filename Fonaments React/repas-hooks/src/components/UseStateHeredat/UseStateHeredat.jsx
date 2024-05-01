import { useState } from "react";
import Llista from "./Llista";
import NouRegal from "./NouRegal";

const useStateHeredat = () => {
	const [regals, setRegal] = useState(["pilota", "llanterna", "peluix"]);

	const afegirRegal = () => {
		const nouRegal = prompt("Nou regal?");
		setRegal([...regals, nouRegal]);
	};

	return (
		<div>
			<h2>useState Heredat</h2>
			<hr />
			<Llista regals={regals} />
			<NouRegal afegirRegal={afegirRegal} />
		</div>
	);
};

export default useStateHeredat;
