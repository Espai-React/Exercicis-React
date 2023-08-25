const NestedLists = ({ recipes }) => (
	<div>
		<h3>Recipes</h3>
		{recipes.map(({ id, name, ingredients }) => (
			<ul key={id}>
				<li>{name}</li>
				<ul>
					{ingredients.map((ingredient) => (
						<li key={ingredient}>{ingredient}</li>
					))}
				</ul>
				<br />
			</ul>
		))}
	</div>
);

export default NestedLists;
