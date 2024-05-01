import { useEffect, useRef } from "react";
import { FadeInAnimation } from "../animation";

const Animació = ({ durada }) => {
	const animacioRef = useRef(null);

	useEffect(() => {
		const animacio = new FadeInAnimation(animacioRef.current);
		animacio.start(durada);
		return () => {
			animacio.stop();
		};
	}, []);

	return (
		<div
			ref={animacioRef}
			style={{
				opacity: 0,
				color: "white",
				padding: 50,
				textAlign: "center",
				fontSize: 25,
				backgroundImage:
					"radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
			}}>
			Welcome
		</div>
	);
};

export default Animació;
