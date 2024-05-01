

const CompFill = ({ valor, handleValor }) => {
	return (
		<div>
			<div>{valor}</div>
			<button onClick={handleValor}>Clica!</button>
		</div>
	);
};

export default CompFill;
