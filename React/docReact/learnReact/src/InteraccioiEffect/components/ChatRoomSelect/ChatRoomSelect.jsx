import { useEffect, useRef, useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const ChatRoomSelect = () => {
	const [roomId, setRoomId] = useState(null);
	const [ésFosc, setÉsFosc] = useState(false);
	const [ÉsEncriptat, setÉsEncriptat] = useState(false);
	const [missatgeInput, setMissatgeInput] = useState(null);
	//const [previ, setPrevi] = useState(null);
	const previRef = useRef();
	let previ = previRef.current;
	const serverUrl = "https://localhost:1234";
	let missatgeEncriptat = ÉsEncriptat ? "encriptada" : "no encriptada";
	console.log("roomId", roomId);

	const connexio = () => {
		const connecta = (missatgeLog) => {
			console.log(missatgeLog);
		};
		const desconnecta = (missatgeLog) => {
			console.log(missatgeLog);
		};
		return {
			connecta,
			desconnecta,
		};
	};

	const notifica = (missatge, ésFosc) => {
		Toastify({
			text: missatge,
			duration: 2000,
			gravity: "top",
			position: "right",
			style: {
				background: !ésFosc ? "white" : "black",
				color: !ésFosc ? "black" : "white",
			},
		}).showToast();
	};

	const sessio = connexio(serverUrl, roomId);
	useEffect(() => {
		//console.log("refresca");
		if (!!roomId) {
			let missatge;
			if (roomId !== "sortir") {
				sessio.connecta(
					`✅ Connexió ${missatgeEncriptat} a sala ${roomId} a través de ${serverUrl}`
				);
				notifica(
					(missatge =
						missatgeInput ?? `Connectat amb connexió ${missatgeEncriptat}!`),
					ésFosc
				);
			} else {
				sessio.desconnecta(
					`❌ Desconnexió ${missatgeEncriptat} de la sala ${previ}`
				);
				notifica(
					(missatge = `Desconnectat de la connexio ${missatgeEncriptat}!`),
					ésFosc
				);
			}
		}
	}, [roomId, ÉsEncriptat]);

	useEffect(() => {
		return () => {
			setRoomId(null);
			setÉsFosc(false);
			sessio.desconnecta();
		};
	}, []);

	return (
		<div>
			<h3>Selecció de sales del xat</h3>
			<label htmlFor="missatgeInput">
				Missatge per la Sala{" "}
				<input
					type="text"
					id="missatgeInput"
					value={missatgeInput ?? ""}
					onChange={({ target: { value } }) =>
						setMissatgeInput(value === "" ? null : value)
					}
				/>
			</label>
			<label htmlFor="escullSala">
				Escull una sala del xat{" "}
				<select
					name="escullSala"
					id="escullSala"
					value={roomId ?? ""}
					onChange={(e) =>
						setRoomId((prev) => {
							previRef.current = prev;
							return e.target.value;
						})
					}>
					<optgroup label="Escull una sala">
						<option disabled></option>
						<option value="general">General</option>
						<option value="de viatges">Viatges</option>
						<option value="de musica">Música</option>
						<option value="sortir">Sortir</option>
					</optgroup>
				</select>
			</label>
			<label htmlFor="checkboxFosc">
				<input
					id="checkboxFosc"
					type="checkbox"
					value={ésFosc}
					onChange={(e) => setÉsFosc(e.target.checked)}
				/>
				Tria el tema fosc{" "}
			</label>
			<label htmlFor="checkboxEncriptacio">
				<input
					id="checkboxEncriptacio"
					type="checkbox"
					value={ÉsEncriptat}
					onChange={(e) => setÉsEncriptat(e.target.checked)}
				/>
				Connexió encriptada{" "}
			</label>
			<div style={{height: "20px"}}>
				{roomId === "sortir" ? (
					<p>Sortir de la sala {previ}</p>
				) : (
					!!roomId && <p>Benvingut a la sala {roomId}!</p>
				)}
			</div>
		</div>
	);
};

export default ChatRoomSelect;
