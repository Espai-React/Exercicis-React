//import { useEffect, useState } from "react";

const Case = ({ baseState, queue, expected }) => {
	
	//const [state, setState] = useState(baseState);
	let state = baseState;
	console.log(queue);

	const handleState = () => {
		for (let element of queue) {
			(typeof element === "function") ?
				state = element(state) :
				state = element;
		}
		return state;
	};
	handleState();

	/* useEffect(() => {
		setState(baseState);
		queue.forEach((element) => {
			typeof element === "function"
				? setState((prev) => element(prev))
				: setState(element);
			console.log("ei", state);
		});
	}, []);
 */
	
	return (
		<div>
			<p>
				Base State: <b>{baseState}</b>
			</p>
			<p>
				Queue: <b>[{queue.join(", ")}]</b>
			</p>
			<p>
				Expected result: <b>{expected}</b>
			</p>
			<p style={{ color: state === expected ? "green" : "red" }}>
				Your result: <b>{state} </b>
				{state === expected ? "correct" : "wrong"}
			</p>
		</div>
	);
};

export default Case;
