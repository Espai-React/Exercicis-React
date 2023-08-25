import { getImage } from "../../../lib/utils/getImage";
import { Fragment } from "react";

const PeopleList = ({ people }) => {
	
	const peopleList = people.map(({ id, name, profession, accomplishment, imageId }) => (
		<Fragment key={id}>
			<li>Name:</li>
			<img className="avatar" src={getImage(imageId)} alt={name} />
			<ul>
				<li>{name}</li>
				<li>{profession}</li>
				<li>{accomplishment}</li>
			</ul>
		</Fragment>
	));

	return <>{peopleList}</>;
};

export default PeopleList;
