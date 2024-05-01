import { useState } from "react";
import WelcomeinCSS from "./WelcomeinCSS/index";

const WelcomeCSS = () => {
	const [show, setShow] = useState(false);

	return (
		<div>
			<h3>Welcome CSS</h3>
			<button value={show} onClick={() => setShow(!show)}>
				{show ? "Hide" : "Show"}
			</button>
			{show && <WelcomeinCSS />}
		</div>
	);
};

export default WelcomeCSS;
