import { useEffect, useState } from "react";
import ContactList from "./ContactList";
import EditContact from "./EditContact";

const initialContacts = [
	{ id: 0, name: "Taylor", email: "taylor@mail.com" },
	{ id: 1, name: "Alice", email: "alice@mail.com" },
	{ id: 2, name: "Bob", email: "bob@mail.com" },
];

const ContactManager = () => {
	const [contacts, setContacts] = useState(initialContacts);
	const [selected, setSelected] = useState(null);
	const [contactSelected, setContactSelected] = useState({});
	const { name, email } = contactSelected;
	const [warning, setWarning] = useState({
		fixedMessage: "Attention!: ",
		warnMessage: null,
		state: false,
	});
	const { fixedMessage, warnMessage, state } = warning;
	const warningToPrint = fixedMessage + warnMessage;

	useEffect(() => {
		const initialContactSelected = contacts[selected] || {};
		setContactSelected(initialContactSelected);
		//console.log("initialContactSelected", initialContactSelected);
	}, [selected, contacts]);

	//console.log("contacts", contacts);
	//console.log("selected", selected);
	//console.log("contactSelected", contactSelected);

	const handleChanges = () => {
		if (selected) {
			const { name: selectedName, email: selectedEmail } = contactSelected;
			setContacts(
				contacts.map((contact) => {
					return contact.id === selected
						? { ...contact, name: selectedName, email: selectedEmail }
						: contact;
				})
			);
			name !== selectedName || email !== selectedEmail
				? showWarning2Sec(`Changes saved to ${selectedName}!`)
				: showWarning2Sec(`No changes applied to ${name}!`);
		} else {
			showWarning2Sec(`No changes to apply!`);
		}
	};

	const resetChanges = () => {
		if (selected) {
			const { name: intialName, email: initialEmail } =
				initialContacts[selected];

			setContacts(
				contacts.map((contact) => {
					return contact.id === selected
						? { ...contact, name: intialName, email: initialEmail }
						: contact;
				})
			);
			name !== intialName || email !== initialEmail
				? showWarning2Sec(`Changes reseted to ${intialName}!`)
				: showWarning2Sec(`No changes reseted to ${name}!`);
		} else {
			showWarning2Sec(`No changes to reset!`);
		}
	};

	const showWarning2Sec = (warnMessage) => {
		setWarning({
			...warning,
			warnMessage,
			state: true,
		});
		setTimeout(() => {
			setWarning({
				...warning,
				warnMessage: null,
				state: false,
			});
		}, 2000);
	};

	return (
		<>
			<div>
				<ContactList
					contacts={contacts}
					selected={selected}
					setSelected={setSelected}
				/>
				<EditContact
					contactSelected={contactSelected}
					setContactSelected={setContactSelected}
					handleChanges={handleChanges}
					resetChanges={resetChanges}
				/>
			</div>
			<div style={{ height: "30px" }}>{state && warningToPrint}</div>
		</>
	);
};

export default ContactManager;
