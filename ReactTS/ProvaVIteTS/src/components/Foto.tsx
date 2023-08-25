import MarcFoto from "./MarcFoto";

interface ImageItem {
	id: number;
	tipus: "imatge";
	títol: string;
	urlImatge: string;
}

interface DescripcioItem {
	id: number;
	tipus: "descripcio";
	descripcio: string;
}

export type Item = ImageItem | DescripcioItem;

const Foto = () => {
	const items: Item[] = [
		{
			id: 1,
			tipus: "imatge",
			títol: "La foto",
			urlImatge:
				"https://images.unsplash.com/photo-1682547094491-f11620a69e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=200&q=60",
		},
		{
			id: 2,
			tipus: "descripcio",
			descripcio: "lorem ipsum dolor sit amet consectetur adipiscing elit.",
		},
	];

	return (
		<div>
			<MarcFoto items={items} />
		</div>
	);
};

export default Foto;
