const ContactsListReducer = ({ contacts, selectedId, dispatch }) => (
	<ul className="contact-list">
		{contacts.map(({ id, name }) => (
			<li key={id} style={{ display: "inline" }}>
				<button
					onClick={() => {
						dispatch({ type: "changed_selection", contactId: id });
					}}>
					{selectedId === id ? <b>{name}</b> : name}
				</button>
			</li>
		))}
	</ul>
);

export default ContactsListReducer;
