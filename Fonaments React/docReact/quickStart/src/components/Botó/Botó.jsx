import { useState } from "react";

const Botó = () => {
	const [clics, setClics] = useState(0);

	return (
		<div>
			<button onClick={() => setClics(clics + 1)}>
				Botó independent clicat {clics} cops
			</button>
		</div>
	);
};

export default Botó;
