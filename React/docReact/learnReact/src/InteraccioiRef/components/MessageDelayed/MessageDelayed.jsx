import { useRef, useState } from "react";

const initValues = { text: "", print: false, textP: "" };

const MessageDelayed = () => {
	const [missatge, setMissatge] = useState(initValues);
	const { text, print, textP } = missatge;
	const printRef = useRef("El missatge és: ");
	const textRef = useRef(null);
	const intervalRef = useRef(null);
	//console.log(text, print, textP, textRef.current);

	const handleClick = () => {
		setMissatge(initValues);
		clearTimeout(intervalRef.current);
		//console.log(intervalRef.current);

		intervalRef.current = setTimeout(() => {
			textRef.current = text;
			setMissatge({
				text: "",
				print: true,
				textP: textRef.current,
			});
		}, 3000);
	};

	return (
		<div>
			<h3>Message Delayed</h3>
			<div style={{ display: "flex" }}>
				<label htmlFor="inputMessage">
					Message{" "}
					<input
						type="text"
						id="inputMessage"
						value={text}
						onChange={(e) =>
							setMissatge((prev) => ({ ...prev, text: e.target.value }))
						}
					/>
				</label>
				<button onClick={handleClick}>Send</button>
			</div>
			<p style={{ margin: 0, height: "20px" }}>
				{print && printRef.current + textP}
			</p>
		</div>
	);
};

export default MessageDelayed;
