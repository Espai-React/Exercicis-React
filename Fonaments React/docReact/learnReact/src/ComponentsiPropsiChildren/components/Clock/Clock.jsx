const Clock = ({ time }) => {
	let hours = time.getHours();
	let className =
		(hours >= 0 && hours <= 6) ? "night" : "day";

	return <h3 className={className}>{time.toLocaleTimeString()}</h3>;
};

export default Clock;
