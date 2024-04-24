import "./App.css";
import { useState } from "react";
import validator from "validator";

function App() {
	const [signupInput, setSingupInput] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState("");
	const { email, password, confirmPassword } = signupInput;

	const handleChange = (e) => {
		setSingupInput({
			...signupInput,
			[e.target.name]: e.target.value,
		});
	};

	const handleClick = (e) => {
		e.preventDefault();
		if (!validator.isEmail(email)) setError("The email you input is invalid");
		else if (signupInput.password.length < 5) {
			setError("the password you input should be 5 characters long");
		} else if (signupInput.password !== signupInput.confirmPassword) {
			setError("the passwords doesn't match");
		} else setError("")
	};

	return (
		<div className="container my-5">
			<form>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email Address
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="form-control"
						value={email}
						onChange={handleChange}
					/>
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						className="form-control"
						value={password}
						onChange={handleChange}
					/>
					<label htmlFor="confirmPassword" className="form-label">
						Confirm Password
					</label>
					<input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						className="form-control"
						value={confirmPassword}
						onChange={handleChange}
					/>
				</div>
				{error && <p className="text-danger">{error}</p>}
				<button
					name="submit"
					type="submit"
					className="btn btn-primary"
					onClick={handleClick}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default App;
