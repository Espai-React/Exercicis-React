const Profile = () => {
	const usuari = {
		nom: "Hedy Lamarr",
		imatgeUrl: "https://i.imgur.com/yXOvdOSs.jpg",
		imatgeMida: 90,
	};

	return (
		<>
			<h4>{usuari.nom}</h4>
			<img
				src={usuari.imatgeUrl}
				alt={`Imatge de ${usuari.nom}`}
				style={{ width: usuari.imatgeMida, height: usuari.imatgeMida, borderRadius: "25%" }}
			/>
		</>
	);
};

export default Profile;
