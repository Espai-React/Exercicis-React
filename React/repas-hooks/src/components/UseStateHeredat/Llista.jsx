const Llista = ({ regals }) => (
	<>
		<p>Llista de regals</p>
		<ul>
			{regals.map((regal, index) => (
				<div key={index}>{regal}</div>
			))}
		</ul>
	</>
);

export default Llista;
