const Item = ({ item: { name, isPacked } }) => (
	<li className="item">
		{isPacked ? <del>{name} "✔"</del> : <ins>{name}</ins>}
	</li>
);

export default Item;
