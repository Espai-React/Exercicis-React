const LittleChat = ({
	to: { id, name, email },
	text,
	handleText,
	resetText,
}) => (
	<div className="chat">
		<textarea
			cols="40"
			rows="4"
			placeholder={`Message to ${name}`}
			value={text[id] === null ? "" : text[id]}
			onChange={(e) => handleText(e, id)}></textarea>
		<br />
		<button onClick={() => resetText(id)}>Reset {name}</button>
		<button>Sent to: {email}</button>
	</div>
);

export default LittleChat;
