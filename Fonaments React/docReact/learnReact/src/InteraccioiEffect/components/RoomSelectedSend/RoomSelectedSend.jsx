import { useEffect } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function showNotification(message, theme) {
	Toastify({
		text: message,
		duration: 3000,
		gravity: "top",
		position: "right",
		style: {
			background: theme ? "black" : "white",
			color: theme ? "white" : "black",
		},
	}).showToast();
}

const connexio = (urlServer, roomId, isDark, prevRef) => {
	let missatgeLog = `Sessió ${
		roomId !== "sortir" ? "connectada a" : "desconnectada de"
	} la sala ${
		roomId !== "sortir" ? roomId : prevRef.current
	} a través de ${urlServer}`;
	let timeoutId, timeoutId2;

	const connecta = () => {
		timeoutId2 = setTimeout(() => {
			console.log(missatgeLog);
		}, 1500);
		timeoutId = setTimeout(() => {
			showNotification(missatgeLog, isDark);
		}, 2000);
		return [timeoutId, timeoutId2];
	};
	const desconnecta = () => {
		timeoutId2 = setTimeout(() => {
			console.log(missatgeLog);
		}, 1500);
		timeoutId = setTimeout(() => {
			showNotification(missatgeLog, isDark);
		}, 2000);
		return [timeoutId, timeoutId2];
	};

	return { connecta, desconnecta };
};

const RoomSelectedSend = ({ roomId, isDark, prevRef }) => {
	//console.log("roomId", roomId, "isDark", isDark);
	const urlServer = "https://servidor1234.com";
	const { connecta, desconnecta } = connexio(
		urlServer,
		roomId,
		isDark,
		prevRef
	);

	useEffect(() => {
		let timeoutId, timeoutId2;
		if (roomId) {
			if (roomId !== "sortir") {
				[timeoutId, timeoutId2] = connecta();
				//console.log("connecta", timeoutId, timeoutId2);
			}
			if (roomId === "sortir") {
				[timeoutId, timeoutId2] = desconnecta();
				//console.log("desconnecta", timeoutId, timeoutId2);
			}
		}
		return () => {
			clearTimeout(timeoutId);
			clearTimeout(timeoutId2);
			//console.log("reconnecta", timeoutId, timeoutId2);
		};
	}, [roomId]);

	useEffect(() => {
		return () => {
			desconnecta();
		};
	}, []);

	return (
		<div style={{ height: "25px" }}>
			{roomId === "sortir" ? (
				<p>Adéu, que passis un bon dia 😊</p>
			) : !roomId ? (
				<p>Hola bon dia 😘</p>
			) : (
				<p>Benvingut a la sala {roomId}!</p>
			)}
		</div>
	);
};

export default RoomSelectedSend;
