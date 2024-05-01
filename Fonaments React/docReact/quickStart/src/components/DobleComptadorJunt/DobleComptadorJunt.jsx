const DobleComptadorJunt = ({ setComptador, comptador }) => (
	<div>
		<button onClick={() => setComptador(comptador + 1)}>
			Clics comptador {comptador}
		</button>
		<button onClick={() => setComptador(comptador + 1)}>
			Clics comptador {comptador}
		</button>
	</div>
);

export default DobleComptadorJunt;

