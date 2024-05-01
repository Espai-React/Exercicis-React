import Recipe from "../Recipe";

const NestedListsExtracted = ({ recipes }) => (
	<div>
		<h3>Recipes</h3>
		{recipes.map(({id, ...recipe}) => (
			<Recipe key={id} {...recipe} />
		))}
	</div>
);

export default NestedListsExtracted;
