import { useState } from "react";
import Welcome from "./Welcome/Welcome";


const WelcomeRefactor = () => {

	const [show, setShow] = useState(false);
	

	return (
		<div>
			<h3>Welcome refactor</h3>
			<button value={show} onClick={() => setShow(!show)}
			>{show ? "Hide" : "Show"}</button>
			{show && <Welcome />}
		</div>
	);
};

export default WelcomeRefactor;
