import Button from "../Button";

const TootlBar = ({ onPlayMovie, onUploadImage }) => (
	<div>
		<Button onClick={onPlayMovie}>Play Movie</Button>
		<Button onClick={onUploadImage}>Upload Image</Button>
	</div>
);

export default TootlBar;
