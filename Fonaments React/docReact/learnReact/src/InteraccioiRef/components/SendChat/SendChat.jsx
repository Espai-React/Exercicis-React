import { useRef, useState } from "react";

const SendChat = () => {
	const [message, setMessage] = useState("");
	const [escribiendo, setEscribiendo] = useState(null);
	const [enviando, setEnviando] = useState(false);
	const [enviado, setEnviado] = useState(false);
	const intervalRef = useRef(null);
	let aviso = (escribiendo === null) ? "" : escribiendo
		? "escribiendo..."
		: enviado
			? "Mensaje enviado"
			: enviando
				? "Enviando mensaje..."
				: "Mensaje no enviado";

	const handleMessage = (e) => {
		setEscribiendo(true);
		setMessage(e.target.value);
	};

	const handleSend = () => {
		setEscribiendo(false);
		setEnviando(true);
		intervalRef.current = setTimeout(() => {
			setEnviando(false);
			setEnviado(true);
			setTimeout(() => {
				setEscribiendo(null);
				setEnviado(false);
				setMessage("");
			}, 2000);
		}, 3000);
	};

	const handleUndo = () => {
		clearInterval(intervalRef.current);
		setEscribiendo(false);
		setEnviando(false);
		setEnviado(false);
		setMessage(message);
		setTimeout(() => {
			setEscribiendo(null);
			setMessage("");
		}, 2000);
	}

	return (
		<div>
			<h3>Send Chat in 3sec or undo</h3>
			<label htmlFor="inputMessage">
				Message:{" "}
				<input
					type="text"
					id="inputMessage"
					placeholder="Enter your message"
					value={message}
					onChange={handleMessage}
				/>
			</label>
			<button onClick={handleSend}>Send</button>
			{enviando && <button button onClick={handleUndo}>Undo</button>}
			<p>{aviso}</p>
		</div>
	);
};

export default SendChat;
