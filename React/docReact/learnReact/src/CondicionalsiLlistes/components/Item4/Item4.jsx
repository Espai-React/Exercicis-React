const Item4 = ({ item: { isPacked, name } }) => {

	let itemContent = name;
	if (isPacked) itemContent = <del>{name} ✔</del>;

	return <li className="item">{itemContent}</li>;
};

export default Item4;
