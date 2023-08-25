import { useState } from "react";
import { Contenidor } from './Salutacio.styles';

const Salutacio = () => {

	const [salutacio, setSalutacio] = useState(true);
	const [textSalutacio, setTextSalutacio] = useState("Hola");

	const handleSalutacio = () => {
		if (salutacio === true) {
			setSalutacio(false)
			setTextSalutacio("Adiós")
		}
		else {
			setSalutacio(true)
			setTextSalutacio("Hola")
		}
	}
	console.log(salutacio);

	return (
		<Contenidor>
			<div className={`contenidorSalutacio ${salutacio? "verd" : "vermell"}`}><span>Això és salutació:</span> <span>{textSalutacio}</span></div>
			<button onClick={() => handleSalutacio()}>Clica!</button>
		</Contenidor>
	);
}

export default Salutacio;
