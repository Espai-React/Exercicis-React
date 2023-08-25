import { useState } from "react";
import ChatDarkEncryptedRoom from "./CharDarkEncryptedRoom/CharDarkEncryptedRoom";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function showNotification(message, theme) {
	Toastify({
		text: message,
		duration: 2000,
		gravity: "top",
		position: "right",
		style: {
			background: theme === "dark" ? "black" : "white",
			color: theme === "dark" ? "white" : "black",
		},
	}).showToast();
}

const ChatDarkEncrypted = () => {
	const [isDark, setIsDark] = useState(false);
	const [isEncrypted, setIsEncrypted] = useState(false);
	const [roomId, setRoomId] = useState("general");
	//console.log("isDark", isDark, "isEncrypted", isEncrypted, "roomId", roomId);
	

	const onMessage = (message) => {
		showNotification(`New message : ${message}`, isDark ? "dark" : "light");
	};

	const options = {
		serverUrl: "http://localhost:8080",
		roomIdOpt: roomId,
		isEncryptedOpt: isEncrypted,
	};

	const createConnection = (options) => {
		const { serverUrl: serverUrlOpt, roomIdOpt, isEncryptedOpt } = options;
		console.log("serverUrlOpt", serverUrlOpt, "roomIdOpt", roomIdOpt, "isEncryptedOpt", isEncryptedOpt);
		
				
		let intervalId, messageCallback;
		let encrypted = isEncryptedOpt ? "encrypted" : "unencrypted";
		let lock = isEncryptedOpt ? "✅🔒" : "❌🔒";
		return {
			on(event, callback) {
				if (event !== "message")
					throw Error("Only 'messages' event is supported");
				if (messageCallback === true)
					throw Error("Message callback already set");
				messageCallback = callback;
			},

			connect() {
				console.log(
					`${lock} Connecting to ${roomIdOpt} room... (${encrypted}) on server ${serverUrlOpt}`
				);
				clearInterval(intervalId);
				intervalId = setInterval(() => {
					if (messageCallback) {
						Math.random() > 0.5
							? messageCallback("hey")
							: messageCallback("lol");
					}
				}, 3000);
			},

			disconnect() {
				clearInterval(intervalId);
				messageCallback = null;
				console.log(`❌ Disconnected from room ${roomIdOpt}, (${encrypted})`);
			},
			roomIdOpt, isEncryptedOpt,
		};
	};

	return (
		<div>
			<h3>Chat Dark Encrypted</h3>
			<label htmlFor="checkTheme">
				<input
					type="checkbox"
					id="checkTheme"
					checked={isDark}
					onClick={({ target: { checked } }) => setIsDark(checked)}
				/>
				Use dark Theme
			</label>
			<label htmlFor="encryption">
				<input
					type="checkbox"
					id="encryption"
					checked={isEncrypted}
					onChange={({ target: { checked } }) => setIsEncrypted(checked)}
				/>
				Enable encryption
			</label>
			<label htmlFor="selectRoom">
				Choose the chat room{" "}
				<select
					name="selectRoom"
					id="selectRoom"
					value="idRoom"
					onChange={(e) => setRoomId(e.target.value)}>
					<option value="">Select an option</option>
					<option value="general">General</option>
					<option value="music">Musci</option>
					<option value="travel">Travel</option>
				</select>
			</label>
			<ChatDarkEncryptedRoom
				roomId={roomId}
				onMessage={onMessage}
				createConnection={createConnection(options)}
				isEncrypted={isEncrypted} 				
			/>
		</div>
	);
};

export default ChatDarkEncrypted;
