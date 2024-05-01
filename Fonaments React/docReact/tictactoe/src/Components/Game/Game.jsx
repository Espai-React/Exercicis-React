import Board from "../Board/Board";
import { useState } from "react";

const Game = () => {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const [winner, setWinner] = useState(null);
	console.log("winner", winner);	
	const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];

	const handlePlay = (nextSquares) => {
		console.log("clickhandlePlay");		
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
		console.log("history",history);
	};

	const resetGame = () => {
		setHistory([Array(9).fill(null)]);
		setCurrentMove(0);
		setWinner(null);
	}

	const moves = history.map((_, move, history) => {
		let description = move > 0 ? `Go to move # ${move}` : `Go to game start`;
		return move === history.length - 1 ? (
			<li key={move}>You are at move {move}</li>
		) : (
			<li key={move}>
				<button onClick={() => setCurrentMove(move)}>{description}</button>
			</li>
		);
	});

	function calculateWinner(currentSquares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let element in lines) {
			const [a, b, c] = lines[element];
			if (
				currentSquares[a] !== null &&
				currentSquares[a] === currentSquares[b] &&
				currentSquares[a] === currentSquares[c]
			)
				return [lines[element], currentSquares[a]];
		}
		return null;
	}

	return (
		<div className="game">
			<div className="game-board">
				<Board
					xIsNext={xIsNext}
					currentSquares={currentSquares}
					handlePlay={handlePlay}
					winner={winner} 
					setWinner={setWinner}					
					calculateWinner={calculateWinner} 			
				/>
			</div>
			<div className="game-info">
				<button onClick={resetGame}>Reset Game</button>
				<ol>{moves}</ol>
			</div>
		</div>
	);
};

export default Game;
