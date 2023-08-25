interface TitolProps {
	textTitol: string;
	textExtra?: string;
}

const Titol = ({ textTitol, textExtra = "extra per defecte" }: TitolProps) => (
	<>
		<h3>{textTitol}</h3>
		<p>{textExtra}</p>
	</>
);

export default Titol;
