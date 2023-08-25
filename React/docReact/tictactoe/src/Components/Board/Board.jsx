import Square from "../Square/index";

const Board = ({
	xIsNext,
	currentSquares,
	handlePlay,
	setWinner,
	winner,
	calculateWinner,
}) => {
	const handleClick = (i) => {
		console.log("clickhandleClick");
		if (currentSquares[i] || calculateWinner(currentSquares)) return;
		const nextSquares = currentSquares.slice();
		nextSquares[i] = xIsNext ? "X" : "O";
		handlePlay(nextSquares);
		setWinner(calculateWinner(nextSquares));
	};

	console.log("winner2", winner);
	
	let status =
		winner
			? `The winner is: ${winner[1]}`
			: `Next player: ${xIsNext ? "X" : "O"}`;

	/* let rows = [];
	let board = [];
	currentSquares.forEach((_, index) => {
		rows.push(
			<Square
				value={currentSquares[index]}
				handleClick={() => handleClick(index)}
			/>
		);
		if (rows.length === 3) {
			board.push(<div className="board-row">{rows}</div>);
			rows = [];
		}
		return board;
	});
	console.log(board); */

	const block = (i) => {
		let rows = [];
		for (let j = i * 3; j < i * 3 + 3; j++) {
			const highlighted = winner && winner[0].includes(j)
			rows.push(
				<Square
					key={j}
					highlighted={highlighted}					
					handleClick={() => handleClick(j)}
					value={currentSquares[j]}
				/>
			);
		}
		return (
			<div className="board-row" key={i}>
				{rows}
			</div>
		);
	};

	const board = [];
	for (let i = 0; i < 3; i++) {
		board.push(block(i));
	}
	console.log("board", board);

	return (
		<>
			<div className="status">{status}</div>
			{board}
		</>
	);

	/* {currentSquares.map((_, index) => {
					let row = currentSquares.slice(index, index + 3);
					if (index % 3 === 0) {
						console.log("index",index);
						return (
							<div className="board-row">
								{row.map((_, index2) => {
									if (index === 3) index2 += 3;
									if (index === 6) index2 += 6;								
									console.log("index2",index2);
									return (
										<Square
											value={currentSquares[index2]}
											handleClick={() => handleClick(index2)}
										/>
									);
								})}
							</div>
						); */

	/* {currentSquares.map((_, index) => {
					if (index % 3 === 0) {
						console.log("index", index);
						return (
							<div className="board-row" key={index}>
								{currentSquares.map((_, index2) => {
									if (index === 0 && index2 < 3) {
										console.log("index2", index2);
										return (
											<Square key={index2}
												value={currentSquares[index2]}
												handleClick={() => handleClick(index2)}
											/>
										);
									}
									if (index === 3 && index2 > 2 && index2 < 6) {
										console.log("index2", index2);
										return (
											<Square
												key={index2}
												value={currentSquares[index2]}
												handleClick={() => handleClick(index2)}
											/>
										);
									}
									if (index === 6 && index2 > 5 && index2 < 9) {
										console.log("index2", index2);
										return (
											<Square
												key={index2}
												value={currentSquares[index2]}
												handleClick={() => handleClick(index2)}
											/>
										);
									}
								})}
							</div>
						);
					}
				})} */
};

export default Board;
