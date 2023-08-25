import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";

const ListUUIDv4 = ({ people }) => {
	return (
		<div>
			{people.map((person) => (
				<Fragment key={uuidv4()}>
					<span>{person.name}</span>
					<li>{uuidv4()}</li>
				</Fragment>
			))}
		</div>
	);
};

export default ListUUIDv4;
