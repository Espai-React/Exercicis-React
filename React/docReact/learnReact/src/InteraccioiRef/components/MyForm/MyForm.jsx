import { forwardRef, useRef } from "react";

const MyInput = forwardRef((props, ref) => (
	<input type="text" {...props} ref={ref} />
));

const MyForm = () => {
	const inputRef = useRef(null);

	const handleClick = () => {
		inputRef.current.focus();
		//console.log("inputRef", inputRef);
	};

	return (
		<div>
			<h3>My Form (forwardRef)</h3>
			<MyInput ref={inputRef} />
			<button onClick={handleClick}>Focus</button>
		</div>
	);
};

export default MyForm;
