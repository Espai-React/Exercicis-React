const ChatListReducer = ({
	contacts,
	messages,
	initialState,
	selectedId,
	dispatch,
}) => {
	const { email, name } = contacts[selectedId];
	const message = messages[selectedId];
	const intitialMessage = initialState.messages[selectedId];

	return (
		<div>
			<textarea
				cols="40"
				rows="4"
				placeholder={`Chat to ${name}`}
				value={message ? message : ""}
				onChange={(e) => {
					dispatch({
						type: "edited_message",
						messageChatEdited: e.target.value,
						selectedIdEdited: selectedId,
					});
				}}></textarea>
			<button
				onClick={() => {
					alert(`
			Message sent to ${email}

			Message content:			
			${message}`);
					dispatch({
						type: "sent_message",
						messageChatSent: intitialMessage,
						selectedIdSent: selectedId,
					});
				}}>
				Send to: {email}
			</button>
		</div>
	);
};

export default ChatListReducer;
