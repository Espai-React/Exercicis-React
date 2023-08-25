import { useState } from "react";

const useFormInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);
	const handleInput = (e) => {
		setValue(e.target.value);
	};

	return { value, handleInput };
};

const FormHook = () => {
	//const [nom, setNom] = useState("");
	//const [cognom, setCognom] = useState("");
	const { value: nom, handleInput: handleInputNom } = useFormInput("Mary");
	const { value: cognom, handleInput: handleInputCognom } = useFormInput("Poppins");
	const missatge = "Bon dia, " + nom + " " + cognom;
	//console.log("missatge", missatge, "nom", nom, "cognom", cognom);

	return (
		<div>
			<h3>Form Hook</h3>
			<label htmlFor="inputName">
				Nom:{" "}
				<input
					type="text"
					id="inputName"
					value={nom}
					onChange={handleInputNom}
				/>
			</label>
			<label htmlFor="inputSurname">
				Cognom:{" "}
				<input
					type="text"
					id="inputSurname"
					value={cognom}
					onChange={handleInputCognom}
				/>
			</label>
			{(nom || cognom) && <p>{missatge}</p>}
		</div>
	);
};

export default FormHook;
<h3>Form Hook</h3>;
