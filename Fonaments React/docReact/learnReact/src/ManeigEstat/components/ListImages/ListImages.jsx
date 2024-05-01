import Place from "../Place";


const ListImages = ({ places }) => (
	<div>
		{places.map(({ id, ...place }) => (
			<div key={id}>
				<Place {...place} />
			</div>
		))}
	</div>
);

export default ListImages;
