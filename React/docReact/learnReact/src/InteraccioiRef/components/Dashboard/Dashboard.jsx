import { useRef, useState } from "react";

const Dashboard = () => {
	const messages = ["Spaceship launched", "Soup boiled", "Lullaby sung"];
	const [state, setState] = useState(false);
	const timeoutIDRef1 = useRef(null);
	const timeoutIDRef2 = useRef(null);
	const timeoutIDRef3 = useRef(null);
	const span1 = useRef(null);
	const span2 = useRef(null);
	const span3 = useRef(null);

	const handleClickDelay = ({ id, value }) => {
		setState(false);
		//console.log(id, value, state);
		const message = messages
			.filter((message) => message.toLowerCase().includes(value.toLowerCase()))
			.join(" ");
		//console.log(message);

		switch (id) {
			case "btn1":
				clearTimeout(timeoutIDRef1.current);
				timeoutIDRef1.current = setTimeout(() => {
					span1.current = message;
					setState(true);
				}, 1000);
				break;
			case "btn2":
				clearTimeout(timeoutIDRef2.current);
				timeoutIDRef2.current = setTimeout(() => {
					span2.current = message;
					setState(true);
				}, 1000);
				break;
			case "btn3":
				clearTimeout(timeoutIDRef3.current);
				timeoutIDRef3.current = setTimeout(() => {
					span3.current = message;
					setState(true);
				}, 1000);
				break;
			default:
				break;
		}
	};
	//console.log(state, span1.current, span2.current, span3.current);

	return (
		<div>
			<h3>Dashboard</h3>
			<div>
				<button
					id="btn1"
					onClick={(e) => handleClickDelay(e.target)}
					value={"spaceship"}>
					Launch the spaceship
				</button>
				{span1 !== null && <span>{span1.current}</span>}
			</div>
			<div>
				<button
					id="btn2"
					onClick={(e) => handleClickDelay(e.target)}
					value={"soup"}>
					Boil the soup
				</button>
				{span2 !== null && <span>{span2.current}</span>}
			</div>
			<div>
				<button
					id="btn3"
					onClick={(e) => handleClickDelay(e.target)}
					value={"lullaby"}>
					Sing a lullaby
				</button>
				{span3 !== null && <span>{span3.current}</span>}
			</div>
		</div>
	);
};

export default Dashboard;
