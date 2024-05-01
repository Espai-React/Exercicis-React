import { getImage } from "../../../lib/utils/getImage";

const Chemists = ({ people }) => {
	const chemists = people
		.filter(({ profession }) => profession === "chemist")
		.map((person) => {
			const { id, name, profession, accomplishment } = person;
			console.log("map", id, name, profession, accomplishment);
			
			return (
				<ul key={id}>
					<li>Name:</li>
					<img className="avatar" src={getImage(person)} alt={name} />
					<ul>
						<li>{name}</li>
						<li>{profession}</li>
						<li>{accomplishment}</li>
					</ul>
				</ul>
			)
		});

	return <div>{chemists}</div>;
};

export default Chemists;
