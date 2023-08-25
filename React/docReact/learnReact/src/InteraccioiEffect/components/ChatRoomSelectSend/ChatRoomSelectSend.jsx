import { useRef, useState } from "react";
import RoomSelectedSend from "../RoomSelectedSend";

const ChatRoomSelectSend = () => {
	const [roomId, setRoomId] = useState(null);
	const prevRef = useRef();
	const [isDark, setIsDark] = useState(false);
	//console.log("roomId", roomId, "isDark", isDark);

	return (
		<div>
			<h3>ChatRoom selecet + send + dark theme</h3>
			<label htmlFor="selectRoom">
				Tria una sala{" "}
				<select
					name="selectRoom"
					id="selectRoom"
					value={roomId ?? ""}
					onChange={(e) => {
						prevRef.current = roomId;
						setRoomId(e.target.value);
					}}>
					<option value="">Selecciona</option>
					<option value="general">General</option>
					<option value="de viatges">Viatges</option>
					<option value="de música">Música</option>
					<option value="sortir">Sortir</option>
				</select>
			</label>
			<label htmlFor="checkboxTema">
				<input
					type="checkbox"
					id="checkboxTema"
					value={isDark}
					onClick={() => setIsDark(!isDark)}
				/>{" "}
				Activa tema fosc
			</label>
			<RoomSelectedSend roomId={roomId} isDark={isDark} prevRef={prevRef} 
			/>
		</div>
	);
};

export default ChatRoomSelectSend;
