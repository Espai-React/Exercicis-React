import { useReducer } from "react";
import ContactsListReducer from "../ContactsListReducer";
import ChatListReducer from "../ChatListReducer";

const contacts = [
	{
		id: 0,
		name: "Taylor",
		email: "taylor@mail.com",
	},
	{
		id: 1,
		name: "Alice",
		email: "alice@mail.com",
	},
	{
		id: 2,
		name: "Bob",
		email: "bob@mail.com",
	},
	{
		id: 3,
		name: "Tom",
		email: "tom@mail.com",
	},
	{
		id: 4,
		name: "John",
		email: "john@mail.com",
	},
];

const initialState = {
	selectedId: 0,
	//messages: Array(contacts.length).fill(null),
	messages: {
		0: "Hello, Taylor!",
		1: "Hello, Alice!",
		2: "Hello, Bob!",
		3: "Hello, Tom!",
		4: "Hello, John!",
	},
};

const messengerReducer = (state, action) => {
	switch (action.type) {
		case "changed_selection":
			const contactId = action.contactId;
			return {
				...state,
				selectedId: contactId,
			};
		case "edited_message":
			const { messageChatEdited, selectedIdEdited } = action;
			const messagesEdited = state.messages;
			/* return {
				...state,
				messages: messageEdited.map((item, index) =>
					index === selectedIdEdited ? messageChatEdited : item
				),
			}; */
			return {
				...state,
				messages: {
					...messagesEdited,
					[selectedIdEdited]: messageChatEdited,
				},
			};

		case "sent_message":
			const { messageChatSent, selectedIdSent } = action;
			const messageDeleted = state.messages;
		/* return {
				...state,
				messages: messageDeleted.map((item, index) =>
					index === selectedIdSent ? messageChatSent : item
				),
			}; */
			return {
				...state,
				messages: {
					...messageDeleted,
					[selectedIdSent]: messageChatSent,
				}
			}
		default:
			throw Error("unknown action" + type);
	}
};

const MessengerReducer = () => {
	const [state, dispatch] = useReducer(messengerReducer, initialState);
	const { selectedId, messages } = state;

	return (
		<div>
			<h3>Messenger Reducer</h3>
			<ContactsListReducer
				contacts={contacts}
				selectedId={selectedId}
				dispatch={dispatch}
			/>
			<ChatListReducer
				key={contacts[selectedId].id}
				messages={messages}
				initialState={initialState}				
				selectedId={selectedId}
				contacts={contacts}
				dispatch={dispatch}
			/>
		</div>
	);
};

export default MessengerReducer;
