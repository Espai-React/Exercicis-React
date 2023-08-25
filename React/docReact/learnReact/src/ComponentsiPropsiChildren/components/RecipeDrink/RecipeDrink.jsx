const RecipeDrink = ({ drinkers }) => (
	<ol>
		<li>Boil {drinkers} cups of water</li>
		<li>
			Add {drinkers} spons of tea and {0.5 * drinkers} spons os spice
		</li>
		<li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste</li>
	</ol>
);

export default RecipeDrink;
