import { useState } from "react";

const ChatForm = () => {

	const [missatge, setMissatge] = useState("");	
	const [showForm, setShowForm] = useState(false);	

	const handleSubmit = (e) => {
		e.preventDefault();
		setShowForm(false);
		sendMessage(missatge);
		setMissatge("");
	}

	const sendMessage = (missatge) => {
		console.log("Message sent: ", missatge);		
	}

	if (!showForm) {
		return (
			<div>
				<p>Benvingut al xat</p>
				<button onClick={() => setShowForm(true)}>Open Chat</button>
				</div>
		);
	} 

	return (
		<div>
			<h3>Formulari xat</h3>
			<form onSubmit={handleSubmit}>
				<textarea cols="30" rows="5" placeholder="missatge..." value={missatge} onChange={(e) => setMissatge(e.target.value)}></textarea>
				<button disabled={!missatge}>send</button>
			</form>
		</div>
	);
};

export default ChatForm;
