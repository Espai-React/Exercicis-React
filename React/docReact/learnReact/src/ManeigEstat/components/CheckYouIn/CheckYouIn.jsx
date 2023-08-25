import { useState } from "react";

const CheckYouIn = () => {
	const [fullName, setFullName] = useState({ firstName: "", lastName: "" });
	const { firstName, lastName } = fullName;	

	return (
		<div>
			<h2>Let's check you in</h2>
			<label htmlFor="firstName">
				First Name{" "}
				<input
					type="text"
					id="firstName"
					value={firstName}
					onChange={(e) =>
						setFullName({ ...fullName, firstName: e.target.value })
					}
				/>
			</label>
			<label htmlFor="lastName">
				Last Name{" "}
				<input
					type="text"
					id="lastName"
					value={lastName}
					onChange={(e) =>
						setFullName({ ...fullName, lastName: e.target.value })
					}
				/>
			</label>
			<p>Your ticket will be issued to: {firstName} {lastName}</p>
		</div>
	);
};

export default CheckYouIn;
