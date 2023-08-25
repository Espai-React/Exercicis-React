import { useContext } from "react";
import { ImageSizeContext } from "../LargeImages/LargeImages";

const ImagePlace = ({ imageId, name }) => {
	const { imageSize, isLarge } = useContext(ImageSizeContext);

	return (
		<img
			src={imageId}
			alt={name}
			style={{
				width: imageSize,
				height: imageSize,
				border: `5px ${isLarge ? "solid" : "double"} darkred`,
			}}
		/>
	);
};

export default ImagePlace;
