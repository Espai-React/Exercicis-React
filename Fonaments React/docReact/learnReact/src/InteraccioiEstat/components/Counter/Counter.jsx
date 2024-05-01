import { useState } from "react";

const Counter = () => {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<h3>Counter</h3>
			<button
				onClick={() => {
					setCounter((prevCounter) => prevCounter + 1);
					setCounter(counter + 10);
					setCounter((prevCounter) => prevCounter + 1);
				}}>
				Increment
			</button>
			<span>{counter}</span>
			
		</div>
	);
};

export default Counter;
