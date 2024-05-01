import { forwardRef, useRef, useState } from "react";

const ButtonForwardRef = ({ handleRef }) => (
	<button onClick={handleRef}>FocusOnSearch forwardRef</button>
);

const InputForwardRef = forwardRef(({ text, setText, ...props }, inputRef) => {
	return (
		<input
			type="text"
			placeholder="Ara vindrà..."
			ref={inputRef}
			value={text}
			onChange={({ target: { value } }) => setText(value)}
			{...props}
		/>
	);
});

const FocusOnSearch = () => {
	const [text, setText] = useState("");
	const inputRef = useRef(null);
	console.log(text);

	const handleRef = () => {
		console.log(inputRef.current);
		inputRef.current.focus();
		inputRef.current.value = "Aquest és el lloc!";
		setTimeout(() => {
			inputRef.current.blur();
			inputRef.current.value = "";
		}, 2000);
	};

	return (
		<div>
			<h3>focus() - blur() - forwardRef()</h3>
			<ButtonForwardRef handleRef={handleRef} />
			<InputForwardRef setText={setText} text={text} ref={inputRef} />
			<p>{text}</p>
		</div>
	);
};

export default FocusOnSearch;
