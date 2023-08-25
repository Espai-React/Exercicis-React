import { useEffect, useState } from "react";
import Clock from "../Clock/Clock";

const Time = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const id = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(id);
	}, []);

	return <Clock time={time} />;
};

export default Time;
