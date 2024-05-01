const Recipe = ({ name, ingredients }) => (
	<ul>
		<li>{name}</li>
		<ul>
			{ingredients.map((ingredient) => (
				<li key={ingredient}>{ingredient}</li>
			))}
		</ul>
		<br />
	</ul>
);

export default Recipe;
