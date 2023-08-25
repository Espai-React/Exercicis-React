const ContactList = ({ contacts, selected, setSelected }) => {
	return (
		<div>
			<h3>Contact List</h3>
			{contacts.map(({ id, name, email }) => (
				<div style={{ display: "flex" }} key={id}>
					<button
						id={id}
						onClick={(e) => {
							setSelected(+e.target.id);
							//console.log(e.target.id);
						}}>
						{selected === id ? <b>{name}</b> : name}
					</button>
					<p>Email: {email}</p>
				</div>
			))}
		</div>
	);
};

export default ContactList;
