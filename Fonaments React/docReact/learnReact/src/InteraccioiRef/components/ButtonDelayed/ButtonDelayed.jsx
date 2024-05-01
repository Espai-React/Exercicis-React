import { useEffect, useRef, useState } from "react";

const ButtonDelayed = ({ message, children }) => {
	//const spanRef = useRef(null);
	const [text, setText] = useState(null);
	const timeoutIDRef = useRef(null);

	const handleClick = () => {
		clearTimeout(timeoutIDRef.current);
		timeoutIDRef.current = setTimeout(() => {
			/* spanRef.current.textContent = message;
			console.log(spanRef.current.textContent); */
			setText(message);
		}, 1000);
	};

	useEffect(() => {
		!!text ? console.log("valor", text) : console.log("Valor null");
	}, [text]);

	return (
		<div>
			<button onClick={handleClick}>{children}</button>
			<span>{text}</span>
		</div>
	);
};

export default ButtonDelayed;
