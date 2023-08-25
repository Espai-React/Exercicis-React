import { useEffect } from "react";

const ChatUseEffect = () => {
	useEffect(() => {
		const sessio = () => {
			const connectat = () => console.log("✅ Connecting...");
			const desconnectat = () => console.log("❌ Disconnected");
			return { connectat, desconnectat };
		};
		const connexio = sessio();
		connexio.connectat();
		return () => connexio.desconnectat();
	}, []);

	return (
		<div>
			<h3>Chat useEffect()</h3>
			<p>Connectat al Xat</p>
		</div>
	);
};

export default ChatUseEffect;
