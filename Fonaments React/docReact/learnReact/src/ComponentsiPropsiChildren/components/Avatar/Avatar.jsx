import { getImage } from "../../../lib/utils/getImage";

const Avatar = ({ person, person: { name }, size }) => (
	<div>
		<p>Avatar</p>
		<img
			className="avatar"
			src={getImage(person)}
			alt={name}
			width={size}
			height={size}
		/>
	</div>
);

export default Avatar;
