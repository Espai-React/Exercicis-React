import { useState } from "react";
import { submitForm } from "../../../lib/utils/submitForm";

const CityQuiz = () => {
	const [answer, setAnswer] = useState("");
	const [error, setError] = useState(null);
	const [status, setStatus] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("submitting");
		setError(null);
		try {
			await submitForm(answer);
			setStatus("success");
		} catch (error) {
			setError(error);
		}
		setTimeout(() => {
			setAnswer("");
			setStatus(null)
		}, 3000);
	};

	if (status === "success") return <h2>That's right!</h2>;

	return (
		<>
			<h2>City Quiz</h2>
			<p>
				In which city is there a billboard that turns air into drinkable water
			</p>
			<form onSubmit={handleSubmit}>
				<textarea
					cols="30"
					rows="2"
					value={answer}
					onChange={(e) => {
						setAnswer(e.target.value);
						setStatus("typing");
						setError(null);
					}}
					disabled={status === "submitting"}></textarea>
				<button disabled={status === "submitting" || answer.length === 0}>
					Submit
				</button>
				<button
					type="button"
					onClick={() => {
						setAnswer("");
						setStatus(null);
						setError(null);
					}}
					disabled={status === "submitting"}
					> Retry
				</button>
				{status === "typing" && answer.length !== 0 && <p>Typing...</p>}
				{status === "submitting" && <p>Submitting...</p>}
				{error && <p>{error.message}</p>}
			</form>
		</>
	);
};

export default CityQuiz;
