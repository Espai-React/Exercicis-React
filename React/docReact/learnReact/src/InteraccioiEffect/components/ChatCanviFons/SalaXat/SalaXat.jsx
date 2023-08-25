import { useEffect } from "react";

const SalaXat = ({ opcions }) => {
	const { servidor, select } = opcions;

	useEffect(() => {
		const sessio = () => {
			const connecta = () => {
				console.log(`✅ Conectat amb sala ${select} servidor`, servidor);
			};
			const desconnecta = () => {
				console.log("❌ Desconectat");
			};
			return { connecta, desconnecta };
		};
		//const { connecta, desconnecta } = sessio();
		//const avui = sessio();

		//connecta();
		//avui.connecta();
		sessio().connecta();
		return () => {
			//desconnecta();
			//avui.desconnecta();
			sessio().desconnecta();
		};
	}, [servidor, select]);

	return (
		<div>
			{servidor && select && (
				<p style={{ height: 10 }}>Benvingut a la sala {select}</p>
			)}
		</div>
	);
};

export default SalaXat;
