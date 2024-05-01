const Square = ({ highlighted, handleClick, value }) => {
	return (
		<>
			<button
				className={`square ${highlighted && "highlighted"}`}
				onClick={handleClick}>
				{value}
			</button>
		</>
	);
};

export default Square;
