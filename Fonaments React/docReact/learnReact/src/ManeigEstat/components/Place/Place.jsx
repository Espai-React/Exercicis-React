import ImagePlace from "../ImagePlace";

const Place = ({ name, description, imageId }) => (
	<div className="place">
		<ImagePlace imageId={imageId} name={name} />
		<p>
			<b>{name}: </b>
			{description}
		</p>
	</div>
);

export default Place;
