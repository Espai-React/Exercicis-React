const Profile3 = ({
	scientist: { person,
		person: { name },
		size,
		profession,
		awards,
		discovered },
	getImage,
}) => (
	<section className="profile">
		<h2>{name}</h2>
		<img className="avatar" src={getImage(person)} alt={name} width={size} height={size} />
		<ul>
			<li>
				<b>Profession: </b>
				{profession}
			</li>
			<li>
				<b>Awards {awards.length}: </b>
				{awards.join(", ")}
			</li>
			<li>
				<b>Discovered: </b>
				{discovered}
			</li>
		</ul>
	</section>
);

export default Profile3;
