import { getImage } from "../../../lib/utils/getImage";

const Avatar6 = ({ person: { name, imageId } }) => (
	<img
		className="avatar"
		src={getImage(imageId)}
		alt={name}
		width={50}
		height={50}
	/>
);

export default Avatar6;
