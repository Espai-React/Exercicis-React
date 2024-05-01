import { useRef } from "react";
import Bloc from "./Bloc";

const UseForwardRef = () => {
	const refInput = useRef(null);
	const refNom = useRef(null);

	const handleClicḱ = () => {
		refNom.current.innerHTML = refInput.current.value;
		refInput.current.focus();
		refInput.current.value = "";
	};

	return (
		<div>
			<h2>useForwardRef</h2>
			<hr />
			<p ref={refNom}>Pedro</p>
			<Bloc handleClicḱ={handleClicḱ} ref={refInput} />
		</div>
	);
};

export default UseForwardRef;
