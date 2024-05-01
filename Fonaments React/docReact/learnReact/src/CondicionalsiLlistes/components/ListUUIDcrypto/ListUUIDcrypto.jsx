import { Fragment } from "react";

const ListUUIDcrypto = ({ people }) => {
	return (
		<div>
			{people.map((person) => (
				<Fragment key={crypto.randomUUID()}>
					<span>{person.name}</span>
					<li>{crypto.randomUUID()}</li>
				</Fragment>
			))}
		</div>
	);
};

export default ListUUIDcrypto;
