import { useEffect, useRef } from "react";

const Comptador = () => {
	let refInput = useRef(null);
	let refBoto = useRef(0);	

	const handleClick = () => {
		console.log(refInput.current.value, refBoto.valueOf().current.value);
		refInput.current.value = +refInput.current.value + 1;
		refBoto.valueOf().current.value = +refBoto.valueOf().current.value + 1;		
		alert(`Has clicat ${refBoto.valueOf().current.value} vegades i suma ${refInput.current.value}`);
	};

	//executa 2 vegades degut al strict
	useEffect(() => {
		const boto = refBoto.current;
		boto.addEventListener("click", handleClick);
		return () => {
			boto.removeEventListener("click", handleClick);
		};
	}, []);

	return (
		<div>
			<h3>Comptador</h3>
			<input type="number" ref={refInput} defaultValue={refInput} />
			<button ref={refBoto} value="1" onClick={handleClick}>
				Clica!
			</button>
		</div>
	);
};

export default Comptador;
