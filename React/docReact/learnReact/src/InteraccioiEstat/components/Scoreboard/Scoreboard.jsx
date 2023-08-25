import { useState } from "react";

const Scoreboard = () => {
	const [player, setPlayer] = useState({
		firstName: "Ranjani",
		lastName: "Shettar",
		score: 10,
	});
	const { firstName, lastName, score } = player;	

	const handlePlusClick = () => {
		setPlayer({
			...player,
			score: score + 1,
		});
	};

	const handleFirstNameChange = ({ target: { value } }) => {
		setPlayer({
			...player,
			firstName: value,
		});
	};

	const handleLastNameChange = ({ target: { value } }) => {
		setPlayer({
			...player,
			lastName: value,
		});
	};

	return (
		<>
			<h3>Scoreboard</h3>
			<label htmlFor="button1">
				Score: <b>{score}</b>
				<button id="button1" onClick={handlePlusClick}>
					+1
				</button>
			</label>
			<label htmlFor="fisrtName">
				First Name&nbsp;
				<input
					type="text"
					id="fisrtName"
					value={firstName}
					onChange={handleFirstNameChange}
				/>
			</label>
			<label htmlFor="lastName">
				Last Name&nbsp;
				<input
					type="text"
					id="lastName"
					value={lastName}
					onChange={handleLastNameChange}
				/>
			</label>
		</>
	);
};

export default Scoreboard;
