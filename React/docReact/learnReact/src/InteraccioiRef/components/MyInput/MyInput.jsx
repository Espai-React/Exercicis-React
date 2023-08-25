import { forwardRef, useEffect, useRef, useState } from "react";

const Input = forwardRef(({ label, text, handleText }, inputRef) => (
	<label htmlFor="inputForm">
		{label}
		<input
			type="text"
			id="inputForm"
			value={text}
			onChange={handleText}
			ref={inputRef}
		/>
	</label>
));

const Check = ({ checked, setChecked, handleCheck }) => (
	<label htmlFor="checkForm">
		<input
			type="checkbox"
			id="checkForm"
			value={checked}
			onChange={({ target: { checked } }) => {
				handleCheck(checked);
				setChecked(checked);
			}}
		/>
		Nom en majúscules
	</label>
);

const Resposta = ({ respostaNomRef, respostaCognomRef }) => {
	//console.log("respostaNomRef", respostaNomRef.current);
	return (
		(!!respostaNomRef.current || !!respostaCognomRef.current) && (
			<p>
				Hola {respostaNomRef.current} {respostaCognomRef.current}
			</p>
		)
	);
};

const FormMyInput = () => {
	const [nom, setNom] = useState("");
	const [cognom, setCognom] = useState("");
	const [checked, setChecked] = useState(false);
	const respostaNomRef = useRef(null);
	const respostaCognomRef = useRef(null);
	const inputNomRef = useRef(null);
	const inputCognomRef = useRef(null);
	const [focus, setFocus] = useState("1");

	console.log(
		"nom",
		nom,
		"cognom",
		cognom,
		"checked",
		checked,
		"respostaNomRef",
		respostaNomRef.current,
		"respostaCognomRef",
		respostaCognomRef.current
	);

	const capitalize = (word) =>
		word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

	const handleNom = ({ target: { value } }) => {
		setNom(value);
		respostaNomRef.current = capitalize(value);
	};

	const handleCognom = ({ target: { value } }) => {
		setCognom(value);
		respostaCognomRef.current = capitalize(value);
	};

	const handleCheck = (checked) => {
		respostaNomRef.current = !checked
			? capitalize(respostaNomRef.current)
			: respostaNomRef.current.toUpperCase();
		respostaCognomRef.current = !checked
			? capitalize(respostaCognomRef.current)
			: respostaCognomRef.current.toUpperCase();
	};

	useEffect(() => {
		if (focus === "1") inputNomRef.current.focus();
		setTimeout(() => {
			setFocus("2");
			if (focus === "2") inputCognomRef.current.focus();
		}, 2000);
	}, [focus]);

	return (
		<>
			<Input
				label={"Escriu el teu nom: "}
				text={nom}
				handleText={handleNom}
				ref={inputNomRef}
			/>
			<Input
				label={"Escriu el teu cognom: "}
				text={cognom}
				handleText={handleCognom}
				ref={inputCognomRef}
			/>
			<Check
				checked={checked}
				setChecked={setChecked}
				handleCheck={handleCheck}
			/>
			<Resposta
				respostaNomRef={respostaNomRef}
				respostaCognomRef={respostaCognomRef}
			/>
		</>
	);
};

const MyInput = () => {
	const [show, setShow] = useState(false);
	const muntar = "Muntar el formulari";
	const desmuntar = "Desmuntar el formulari";

	return (
		<div>
			<h3>My input useState(), useEffect(), focus()</h3>
			<button onClick={() => setShow(!show)}>
				{!show ? muntar : desmuntar}
			</button>
			{!show ? <p>Res per muntar...</p> : <FormMyInput />}
		</div>
	);
};

export default MyInput;
