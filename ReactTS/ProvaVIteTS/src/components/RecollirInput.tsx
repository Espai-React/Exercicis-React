import { useContext } from "react";
import { ValorInputContext } from "../context/ValorInputProvider";

const RecollirInput = () => {

	const { estat: { valorInput }, dispatch }  = useContext(ValorInputContext);

	return (
		<div>
			<button
				onClick={() => dispatch({ type: "Set Valor Input", payload: 500 })}>
				Set valor Input
			</button>
			<button
				onClick={() => dispatch({ type: "Set Valor Input a 100"})}>
				Set valor Input a 100
			</button>
			<p>Valor Input: {valorInput}</p>
		</div>
	);
};

export default RecollirInput;
