import { useState } from "react";
import Animació from "./Animació";


const AnimationWelcome = () => {

	const [durada, setDurada] = useState(1000);
	const [mostra, setMostra] = useState(false);
	//console.log("durada", durada);	

	return (
		<div>
			<h3>Animació</h3>
			<label htmlFor="rangeAnimació" id="rangeAnimació" style={{width: "200px", display: "flex", flexDirection: "column"}}>
				Temps de durada{" "}
				<input
					type="range"
					min="100"
					max="3000"
					value={durada}
					onChange={({ target: { value } }) => setDurada((value))}
				/>
				Durada en ms: {durada}
			</label>
			<button onClick={() => setMostra(!mostra)}>{mostra ? "Desactivar" : "Activar"}</button>
			{mostra && <Animació durada={durada}
			/>}
		</div>
	);
};

export default AnimationWelcome;
