import { useEffect } from "react";

const ChatDarkEncryptedRoom = ({ createConnection, onMessage }) => {
	const { on, connect, disconnect, roomIdOpt, isEncryptedOpt } =
		createConnection;
	console.log(
		"on",
		on,
		"connect",
		connect,
		"disconnect",
		disconnect,
		"roomIdOpt",
		roomIdOpt,
		"isEncryptedOpt",
		isEncryptedOpt
	);

	useEffect(() => {
		on("message", (messageInput) => onMessage(messageInput));
		connect();

		return () => {
			disconnect();
		};
	}, [roomIdOpt, isEncryptedOpt]);

	return (
		<div>
			<p>Welcome to the room {roomIdOpt}</p>
		</div>
	);
};

export default ChatDarkEncryptedRoom;
