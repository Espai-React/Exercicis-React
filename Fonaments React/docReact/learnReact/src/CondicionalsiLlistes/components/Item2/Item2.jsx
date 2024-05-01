const Item2 = ({ item: { name, isPacked } }) => (
	<>{isPacked ? <li className="item">{name} ✔</li> : null}</>
);

export default Item2;
