import { useState } from "react";
import ContactList from "../ContactList";
import LittleChat from "../LittleChat";

const contacts = [
	{
		id: 0,
		name: "Taylor",
		email: "taylor@email.com",
	},
	{
		id: 1,
		name: "John",
		email: "john@email.com",
	},
	{
		id: 2,
		name: "Mary",
		email: "mary@email.com",
	},
	{
		id: 3,
		name: "Tom",
		email: "tom@email.com",
	}
];

const Messenger = () => {
	const [to, setTo] = useState(contacts[0]);
	const [text, setText] = useState(Array(contacts.length).fill(null));

	const handleText = (e, id) => {
		setText(
			text.map((element, index) => (index === id ? e.target.value : element))
		);
	};

	const resetText = (id) => {
		setText(text.map((element, index) => (index === id ? null : element)));
	};

	return (
		<div>
			<h3>Messenger</h3>
			<ContactList contacts={contacts} setTo={setTo} />
			<LittleChat
				key={to.id}
				to={to}
				handleText={handleText}
				resetText={resetText}
				text={text}
			/>
		</div>
	);
};

export default Messenger;
