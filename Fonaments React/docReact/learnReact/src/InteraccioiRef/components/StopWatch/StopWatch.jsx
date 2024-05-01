import { useRef, useState } from "react";

const StopWatch = () => {
	const [startTime, setStartTime] = useState(null);
	const [nowTime, setNowTime] = useState(null);
	const intervalRef = useRef(null);

	const handleStart = () => {
		const now = Date.now();
		startTime !== null ? setStartTime(startTime) : setStartTime(now);
		setNowTime(now);
		intervalRef.current = setInterval(() => {
			setNowTime(Date.now());
		}, 10);
	};

	const handleStop = () => {
		clearInterval(intervalRef.current);
		setStartTime(null);
		setNowTime(null);
	};

	const handlePause = () => {
		clearInterval(intervalRef.current);
		setStartTime(startTime);
		setNowTime(nowTime);
	};

	let secondsPassed =
		startTime !== null && nowTime !== null ? (nowTime - startTime) / 1000 : 0;
	//console.log(secondsPassed, "start", startTime, "now", nowTime);

	return (
		<div>
			<h3>El temps passa</h3>
			<div style={{ display: "flex", alignItems: "center" }}>
				<button onClick={handleStart}>Start</button>
				<button onClick={handlePause}>Pause</button>
				<button onClick={handleStop}>Stop</button>
				<p>{secondsPassed.toFixed(3)}</p>
			</div>
		</div>
	);
};

export default StopWatch;
