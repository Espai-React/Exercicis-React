import { useState } from "react";

const Form2 = () => {
	const [person, setPerson] = useState({
		firstName: "Barbara",
		lastName: "Hepworth",
		email: "barbara.hepworth@me.com",
	});
	const { firstName, lastName, email } = person;

	const handleFirstName = ({ target: { value } }) => {
		setPerson({ ...person, firstName: value });
	};

	const handleLastName = ({ target: { value } }) => {
		setPerson({ ...person, lastName: value });
	};

	const handleEmail = ({ target: { value } }) => {
		setPerson({ ...person, email: value });
	};

	return (
		<>
			<label htmlFor="firstName">
				First Name
				<input
					type="text"
					id="firstName"
					value={firstName}
					onChange={handleFirstName}
				/>
			</label>
			<label htmlFor="lastName">
				Last Name
				<input
					type="text"
					id="lastName"
					value={lastName}
					onChange={handleLastName}
				/>
			</label>
			<label htmlFor="email">
				email
				<input type="email" id="email" value={email} onChange={handleEmail} />
			</label>

			<p>
				{firstName} {lastName}
			</p>
			<p>{email}</p>
		</>
	);
};

export default Form2;
