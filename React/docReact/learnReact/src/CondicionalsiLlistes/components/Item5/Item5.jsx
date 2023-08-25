

const Item5 = ({ item: { name, isPacked, importance } }) => (
		<li className="item">
		{name} {isPacked && "✔"} <i>importance: {importance}</i>  
		</li>
	);

export default Item5;
