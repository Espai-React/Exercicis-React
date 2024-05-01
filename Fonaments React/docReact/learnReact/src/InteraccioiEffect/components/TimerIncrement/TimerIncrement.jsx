import { useEffect, useState } from "react";

const TimerIncrement = () => {
	const [timer, setTimer] = useState({ count: 0, increment: 1, delay: 100 });
	const { count, increment, delay } = timer;
	//console.log("count", count, "increment", increment, "delay", delay);

	useEffect(() => {
		const intervalId = setInterval(() => {
			/*
			setTimer((prev) => ({ ...timer, count: prev.count + increment }));
			*/
			setTimer(({ count }) => ({ ...timer, count: count + increment }));
		}, delay);
		//console.log("use");
		return () => {
			//console.log("clear");
			clearInterval(intervalId);
		};
	}, [increment, delay]);

	return (
		<div>
			<h3>Timer + Increment</h3>
			<p>Timer: {count}</p>
			<p>
				Increment by:{" "}
				<button
					onClick={() =>
						setTimer(({ increment }) => ({
							...timer,
							increment: increment - 1,
						}))
					}>
					-
				</button>
				{increment}
				<button
					onClick={() =>
						setTimer(({ increment }) => ({
							...timer,
							increment: increment + 1,
						}))
					}>
					+
				</button>
			</p>
			<p>
				Delay by:{" "}
				<button
					onClick={() =>
						setTimer(({ delay }) => ({ ...timer, delay: delay - 100 }))
					}
					disabled={delay === 100}>
					-100 ms
				</button>
				{delay}
				<button
					onClick={() =>
						setTimer(({ delay }) => ({ ...timer, delay: delay + 100 }))
					}>
					+100 ms
				</button>
			</p>
		</div>
	);
};

export default TimerIncrement;
