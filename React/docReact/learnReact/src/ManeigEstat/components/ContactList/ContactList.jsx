const ContactList = ({ contacts, setTo }) => (
	<div>
		<ul className="contact-list">
			{contacts.map((contact) => {
				const { id, name } = contact;
				return (
					<li key={id} style={{ display: "inline" }}>
						<button onClick={() => setTo(contact)}>{name}</button>
					</li>
				)
			})}
		</ul>
	</div>
);

export default ContactList;
