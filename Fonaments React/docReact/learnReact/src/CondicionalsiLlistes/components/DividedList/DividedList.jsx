import PeopleList from "../PeopleList";

const DividedList = ({ people }) => {
	const chemists = [];
	const everyoneElse = [];
	people.forEach((person) => {
		person.profession === "chemist"
			? chemists.push(person)
			: everyoneElse.push(person);
	});

	return (
		<div>
			<h3>Chemists</h3>
			<PeopleList people={chemists} />
			<hr />
			<h3>Everyone Else</h3>
			<PeopleList people={everyoneElse} />
		</div>
	);
};

export default DividedList;
