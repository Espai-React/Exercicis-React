const Item3 = ({ item: { name, isPacked } }) => (
	<>
		<li className="item">{name} {isPacked && "✔"}</li>
	</>
);

export default Item3;
