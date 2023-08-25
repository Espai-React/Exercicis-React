import { Item } from "./Foto";

interface MarcFotoProps {
	items: Item[];
}

const MarcFoto = ({ items }: MarcFotoProps) => (
	<ul>
		{items.map((item) => {
			const tipus = item.tipus;
			if (tipus === "imatge") {
				const { id, títol, urlImatge } = item;
				return (
					<li key={id}>
						<h3>{títol}</h3>
						<img src={urlImatge} alt={títol} />
					</li>
				);
			}
			const { id, descripcio } = item;
			return (
				<li key={id}>
					<p>{descripcio}</p>
				</li>
			);
		})}
	</ul>
);

export default MarcFoto;
