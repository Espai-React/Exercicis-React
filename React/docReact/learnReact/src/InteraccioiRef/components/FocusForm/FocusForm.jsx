import { useRef } from "react";

const FocusForm = () => {
	const inputRef = useRef(null);
	const inputRef2 = useRef(null);

	// No es pot fer focus a 2 elements a la vegada
	const changeFocus = () => {
		setTimeout(() => {
			inputRef2.current.focus();
		}, 1000);
		inputRef.current.focus();
	};

	return (
		<div>
			<h3>Input amb focus ref</h3>
			<label htmlFor="inputref">
				Input + Focus <input type="text" id="inputref" ref={inputRef} />
			</label>
			<label htmlFor="inputref2">
				Input 2 + Focus <input type="text" id="inputref2" ref={inputRef2} />
			</label>
			<button onClick={changeFocus}>Focus</button>
		</div>
	);
};

export default FocusForm;
