import { useEffect, useRef, useState } from "react";

const useInterval = (callback, delay) => {
	useEffect(() => {
		const intervalId = setInterval(callback, delay);
		return () => clearInterval(intervalId);
	}, [callback, delay]);
};

const useCounter = (delay) => {
	const [secondsPassed, setSecondsPassed] = useState(0);
	useInterval(
		() => setSecondsPassed((secondsPassed) => secondsPassed + 1),
		delay
	);
	return secondsPassed;
};

const CounterWithHook = () => {
	const [delay, setDelay] = useState(1000);
	const secondsPassed = useCounter(delay);
	const refCounter = useRef(null);

	useEffect(() => {
		const colorInterval = setInterval(() => {
			const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`;
			const div2 = refCounter.current;
			div2.style.backgroundColor = randomColor;
		}, 2000);
		return () => clearInterval(colorInterval);
	}, []);

	return (
		<div>
			<h3>Counter + hook</h3>
			<div
				id="counter"
				ref={refCounter}
				style={{
					border: "2px solid black",
					borderRadius: "5px",
					padding: "5px",
				}}>
				<label
					htmlFor="rangeDelay"
					style={{ display: "flex", alignItems: "center", gap: 10 }}>
					Range Delay:
					<input
						type="range"
						min="10"
						max="2000"
						id="rangeDelay"
						value={delay}
						onChange={(e) => setDelay(+e.target.value)}
					/>
				</label>
				<span>Delay: {delay}</span>
				<p>Seconds passed: {secondsPassed}</p>
			</div>
		</div>
	);
};

export default CounterWithHook;
