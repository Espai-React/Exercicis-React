import RecipeDrink from "../RecipeDrink";

const ChaiRecipe = () => (
	<div>
		<h2>Compoents purs - Spiced Chai Recipe</h2>
		<p>For two people:</p>
		<RecipeDrink drinkers={2} />
		<p>For a gathering:</p>
		<RecipeDrink drinkers={4} />
	</div>
);

export default ChaiRecipe;
