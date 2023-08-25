import { useEffect, useState } from "react";

const Counter = () => {
	const [comptador, setComptador] = useState(0);
	const [stop, setStop] = useState(false);
	//console.log("Comptador a", comptador);

	const handleStop = () => {
		setStop(!stop);
	};

	useEffect(() => {
		if (!stop) {
			const interval = setInterval(() => {
				setComptador((c) => c + 1);
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [stop]);

	return (
		<p>
			<b>Comptador a: {comptador}</b>
			<button onClick={handleStop}>{!stop ? "Stop" : "Start"}</button>
			<button onClick={() => setComptador(0)} disabled={!stop}>Reset</button>
		</p>
	);
};

const ShowCounter = () => {
	const [show, setShow] = useState(false);
	const mostrar = "Motrar comptador";
	const ocultar = "Ocultar comptador";

	return (
		<div>
			<h3>Comptador</h3>
			<button onClick={() => setShow(!show)}>
				{!show ? mostrar : ocultar}
			</button>
			{show && <Counter />}
		</div>
	);
};

export default ShowCounter;
