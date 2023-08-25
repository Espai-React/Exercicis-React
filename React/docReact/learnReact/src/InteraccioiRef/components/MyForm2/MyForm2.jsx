import { forwardRef, useImperativeHandle, useRef } from "react";

const MyInput = forwardRef((props, ref) => {
	const imperativeRef = useRef(null);
	useImperativeHandle(ref, () => ({
		imperativeFocus() {
			imperativeRef.current.focus();
		},
	}));
	return <input type="text" {...props} ref={imperativeRef} />;
});

const MyForm2 = () => {
	const inputRef2 = useRef(null);

	const handleClick = () => {
		inputRef2.current.imperativeFocus();
		//console.log("inputRef2", inputRef2);
	};

	return (
		<div>
			<h3>My Form (useImprativeHandle)</h3>
			<MyInput ref={inputRef2} />
			<button onClick={handleClick}>Focus</button>
		</div>
	);
};

export default MyForm2;
