import { useState } from "react";

const RequestTracker = () => {
	const [pending, setPending] = useState(0);
	const [completed, setCompleted] = useState(0);

	const handleClick = async () => {
		setPending((prevPending) => prevPending + 1)
		await delay(2000);
		setCompleted((prevCompleted) => prevCompleted + 1);
		setPending((prevPending) => prevPending - 1);
	}

	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); 

	return (
		<div>
			<h3>Buying process</h3>
			<p>Pending: {pending}</p>
			<p>Completed: {completed}</p>
			<button onClick={() => handleClick()}>Action!</button>
		</div>
	);
};

export default RequestTracker;
