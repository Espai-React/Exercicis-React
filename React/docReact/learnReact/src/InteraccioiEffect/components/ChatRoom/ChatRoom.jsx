import { useEffect, useState } from "react";

const ChatRoom = () => {
	const [connectat, setConnectat] = useState(null);

	const connexio = () => {
		return {
			connectar() {
				console.log("✅ Connectant...");
			},
			desconnectar() {
				console.log("❌ Desconnectant...");
			},
		};
	};

	const sessio = connexio();
	useEffect(() => {
		if (connectat !== null)
			connectat ? sessio.connectar() : sessio.desconnectar();
	}, [connectat]);

	useEffect(() => {
		return () => {
			sessio.desconnectar();
			setConnectat(null);
		};
	}, []);

	return (
		<>
			<h3>Benvingut al Xat</h3>
			<button onClick={() => setConnectat(!connectat)}>
				{connectat ? "Desconnectar" : "Connectar"}
			</button>
		</>
	);
};

export default ChatRoom;
