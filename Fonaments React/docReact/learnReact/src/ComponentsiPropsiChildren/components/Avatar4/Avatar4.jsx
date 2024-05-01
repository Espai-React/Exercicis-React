const Avatar4 = ({ person, person: { name }, size, getImage, thumbnail }) => (
	<div>
		<p>{name}</p>
		<img
			className="avatar"
			src={getImage(person, thumbnail)}
			alt={name}
			width={size}
			height={size}
		/>
	</div>
);

export default Avatar4;
