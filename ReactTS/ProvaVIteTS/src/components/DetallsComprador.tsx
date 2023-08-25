import { useState } from "react";

type Pas = "Detalls" | "Enviament" | "Pagament";

const DetallsComprador = () => {

	const [pasCompra, setpasCompra] = useState<Pas>("Detalls");

	return (
		<div>
			{pasCompra === "Detalls" &&
				<>
					<h3>Detalls</h3>
					<button onClick={() => setpasCompra("Enviament")}>Passar a enviament</button>
				</>
			
			}
			{pasCompra === "Enviament" &&
				<>
					<h3>Enviament</h3>
					<button onClick={() => setpasCompra("Pagament")}>Passar a Pagament</button>
				</>
			
			}
{pasCompra === "Pagament" &&
				<>
					<h3>Compra</h3>
				</>
			
			}

		</div>
	);
};

export default DetallsComprador;
