import { useEffect, useState } from "react";

const fecthBio = (person) => {
	const delay = person == "Bob" ? 2000 : 1000;
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`This is ${person}'s bio`);
		}, delay);
	});
};

const LoadingInfo = () => {
	const [person, setPerson] = useState("");
	const [bio, setBio] = useState(null);
	//console.log("person", person, "bio", bio);

	useEffect(() => {
		let ignore = false;
		//console.log(1, ignore);
		setBio(null);
		!!person &&
			fecthBio(person).then((result) => {
				if (!ignore) setBio(result);
			});
		return () => {
			ignore = true;
			//console.log(2, ignore);
		};
	}, [person]);

	return (
		<div>
			<h3>Loading info (fetch)</h3>
			<select
				name="person"
				id="person"
				value={person}
				onChange={(e) => setPerson(e.target.value)}>
				<option value="" disabled>
					Person
				</option>
				<option value="Alice">Alice</option>
				<option value="Bob">Bob</option>
				<option value="Taylor">Taylor</option>
			</select>
			<p>
				<i>{!!!person ? "No bio to show" : bio ? bio : "Loading..."}</i>
			</p>
		</div>
	);
};

export default LoadingInfo;
