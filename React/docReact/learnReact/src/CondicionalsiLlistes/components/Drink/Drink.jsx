const Drink = ({ name }) => {
	const plant = {
		part: "no data",
		content: "no data",
		age: "no data",
	};
	let { part, content, age } = plant;

	if (name === "tea") {
		part = "leaf";
		content = "15-70 mg/cup";
		age = "4000+ years old";
	} else if (name === "coffee") {
		part = "bean";
		content = "80-185 mg/cup";
		age = "1000+ years old";
	}

	return (
		<div>
			<h5>{name}</h5>
			<dl>
				<dt>Part of plant</dt>
				<dd>{part}</dd>
				<dt>Caffeine content</dt>
				<dd>{content}</dd>
				<dt>Age</dt>
				<dd>{age}</dd>
			</dl>
		</div>
	);
};

export default Drink;
