import { Fragment } from "react";

const Poem = ({ poem: { lines } }) => {
	const linesAndSep = [];
	lines.forEach((line, index) => {
		linesAndSep.push(<p key={index + "-line"}>{line}</p>);
		if (index !== lines.length - 1)
			linesAndSep.push(
				<hr
					key={index + "-separator"}
					style={{ border: "2px dotted black", width: "25%", margin: "0" }}
				/>
			);
		console.log(linesAndSep);
	});

	return (
		<div>
			<h3>Poem</h3>
			{linesAndSep}
		</div>
	);
};

export default Poem;
