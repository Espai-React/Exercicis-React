import { useState } from "react";

const TrafficLight = () => {
	const [walk, setWalk] = useState(true);

	const handleClick = () => {
		alert(walk ? "Next is stop" : "Next is walk");
		setWalk(!walk);
	}

	return (
		<div>
			<button onClick={handleClick}>Click!</button>
			<p style={{ color: walk ? "darkgreen" : "darkred", fontWeight: "bold" }}>
				{walk ? "walk" : "stop"}
			</p>
		</div>
	);
};

export default TrafficLight;
