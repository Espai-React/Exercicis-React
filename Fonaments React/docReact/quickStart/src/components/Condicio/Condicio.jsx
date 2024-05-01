import { useState } from "react";
import Cert from "../Cert/index";
import Fals from "../Fals/index";
import TextCert from "../TextCert/index";

const Condicio = () => {
	const [valor, setValor] = useState(true);

	return (
		<div>
			<button onClick={() => setValor(!valor)}>Clica!</button>
			<p>La Condició és: {valor ? "cert" : "fals"}</p>
			{valor && <p>Sembla que és cert...</p>}
			<hr />
			<h5>O ho fem amb components</h5>
			<div>La Condició és: {valor ? <Cert/> : <Fals/>}</div>
			{valor && <TextCert/>}
		</div>
	);
};

export default Condicio;
