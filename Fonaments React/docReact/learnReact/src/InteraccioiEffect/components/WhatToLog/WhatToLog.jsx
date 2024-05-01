import { useEffect, useState } from "react";

const Log = () => {
	const [text, setText] = useState("");
	const [programa, setPrograma] = useState(false);
	//console.log("text", text, "programa", programa);

	useEffect(() => {
		if(programa) {
			console.log(`Programat log per: ${text}`);
			const enEspera = () => {
				console.log(`Log de ${text}`);
				setPrograma(false);
				setText("");
			};
			const timeoutId = setTimeout(enEspera, 3000);
			return () => {
				console.log(`Cancel·lat log per: ${text}`);
				clearTimeout(timeoutId);
			};
		}
	}, [programa]);

	return (
		<div>
			<h3>What to log</h3>
			<label htmlFor="inputLog">
				<input
					type="text"
					id="inputLog"
					value={text}
					onChange={({ target: { value } }) => setText(value)}
				/>
				<button onClick={() => setPrograma(true)}>
					Clic per programar Log
				</button>
			</label>
		</div>
	);
};

const WhatToLog = () => {
	const [show, setShow] = useState(false);
	const muntar = "Muntar el component";
	const desmuntar = "Desmuntar el component";

	return (
		<div>
			<button onClick={() => setShow(!show)}>{!show ? muntar : desmuntar}</button>
			{!show ? <p>Res per muntar...</p> : <Log />}
		</div>
	);
};

export default WhatToLog;
