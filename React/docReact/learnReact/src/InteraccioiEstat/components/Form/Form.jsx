import { useState } from "react";

const Form = () => {
	const [to, setTo] = useState("Alice");
	const [message, setMessage] = useState("Hello");
	const [isSet, setIsSet] = useState(false);
	console.log(isSet);	

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSet(true);
		setTimeout(() => {
			setIsSet(false);
			alert(`You said ${message} to ${to}`);
		}, 3000);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="select">
					To:
					<select id="select" onChange={(e) => setTo(e.target.value)}>
						<option hidden disabled selected value>
							-- select an option --
						</option>
						<option value="Alice">Alice</option>
						<option value="Bob">Bob</option>
					</select>
				</label>
				<textarea
					placeholder="Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}></textarea>
				<button type="submit">Send</button>
			</form>
			{isSet && <p>Your message to {to} is on its way</p>}
		</>
	);
};

export default Form;
