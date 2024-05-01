
import { useState } from "react";
import FillColorText from "./FillColorText";

const ColorText = () => {

	const [color, setColor] = useState("white");
	const [comptador, setComptador] = useState(0);
	console.log("color", color, "comptador", comptador);
	
	
	const handleClick = () => {
		setColor((color === "white") ? "darkOrange" : "white")
		setComptador(comptador + 1)
	}

	return (
		<div>
			<h3>Color Text</h3>
			<p style={{color: color}}>Text de mostra</p>
			<button value={color} onClick={handleClick}
			>Canvi de color</button>
			<FillColorText comptador={comptador} />
		</div>
	);
};

export default ColorText;
