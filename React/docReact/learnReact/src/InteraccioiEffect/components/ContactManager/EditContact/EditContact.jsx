const InputField = ({
	name,
	label,
	type,
	value,
	contactSelected,
	setContactSelected,
}) => (
	<label htmlFor={name}>
		{label}{" "}
		<input
			type={type}
			id={name}
			value={value}
			onChange={({ target: { value } }) =>
				setContactSelected({ ...contactSelected, [name]: value })
			}
		/>
	</label>
);

const EditContact = ({
	contactSelected,
	setContactSelected,
	handleChanges,
	resetChanges,
}) => {
	const { id, name, email } = contactSelected;
	//console.log(contactSelected, id);

	return (
		<div key={id}>
			<h3>Edit Contact</h3>
			<InputField
				name="name"
				label="Name"
				type="text"
				value={name}
				contactSelected={contactSelected}
				setContactSelected={setContactSelected}
			/>
			<InputField
				name="email"
				label="Email"
				type="email"
				value={email}
				contactSelected={contactSelected}
				setContactSelected={setContactSelected}
			/>
			<button onClick={handleChanges}>Save Changes</button>
			<button onClick={resetChanges}>Reset Changes</button>
		</div>
	);
};
export default EditContact;
