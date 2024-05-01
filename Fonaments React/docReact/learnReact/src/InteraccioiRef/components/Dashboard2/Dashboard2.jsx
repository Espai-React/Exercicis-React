import ButtonDelayed from "../ButtonDelayed";

const Dashboard2 = () => {
	const messages = ["Spaceship launched 2", "Soup boiled 2", "Lullaby sung 2"];

	return (
		<div>
			<h3>Dashboard 2</h3>
			<ButtonDelayed message={messages[0]}>
				Launch the spaceship 2
			</ButtonDelayed>
			<ButtonDelayed message={messages[1]}>Boil the soup 2</ButtonDelayed>
			<ButtonDelayed message={messages[2]}>Sing the lullaby 2</ButtonDelayed>
		</div>
	);
};

export default Dashboard2;
