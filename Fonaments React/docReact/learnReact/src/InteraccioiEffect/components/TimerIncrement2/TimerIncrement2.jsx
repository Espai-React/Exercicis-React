import { useEffect, useState } from "react";


const TimerIncrement2 = () => {

	const [counter, setCounter] = useState(0);
	
	useEffect(() => {	
		//console.log("✅ Creant interval 2s");
		const interval = setInterval(() => {
			//console.log("⏱ Moment interval 2s");
			setCounter((prevCounter) => prevCounter + 1);			
		}, 2000);
		return () => {
			//console.log("❌ Fora interval 2s");
			clearInterval(interval);
		};	
	}, []);
	

	return (
		<div>
			<h3>TimerIncrement2</h3>
			<p>Counter: {counter}</p>
		</div>
	);
};

export default TimerIncrement2;
