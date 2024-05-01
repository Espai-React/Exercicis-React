const TeaGathering = () => {
	let cups = [];
	for (let i = 1; i <= 4; i++) {
		cups.push(<p key={i}>Cup for guest #{i}</p>);
	}
	return cups;
};

export default TeaGathering;
