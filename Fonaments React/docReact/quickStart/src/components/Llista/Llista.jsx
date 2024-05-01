const Llista = ({ productes }) => (
	<ul>
		{productes.map(({ nom, ésFruita, id }) => {
			return (
				<li
					key={id}
					style={{
						textAlign: "left",
						color: ésFruita ? "orange" : "lightblue",
					}}>
					{nom}
				</li>
			);
		})}
	</ul>
);

export default Llista;
