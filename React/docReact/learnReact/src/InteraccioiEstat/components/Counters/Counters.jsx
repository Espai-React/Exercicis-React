import { useState } from "react";

const initialCounters = [0, 0, 0];

const Counters = () => {
	const [counters, setCounters] = useState(initialCounters);

	const increment = (index) => {
		setCounters((prev) => prev.map((counter, i) => (i === index ? ++counter : counter)));
	};

	return (
		<div>
			<h3>Counters</h3>
			<ul>
				{counters.map((counter, index) => (
					<li key={index}>
						{counter} <button onClick={() => increment(index)}>+1</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Counters;
