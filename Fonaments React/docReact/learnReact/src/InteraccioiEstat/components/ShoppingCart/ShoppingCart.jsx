import { useState } from "react";

const initialProducts = [
	{
		id: 0,
		name: "Baklava",
		count: 1,
	},
	{
		id: 1,
		name: "Cheese",
		count: 5,
	},
	{
		id: 2,
		name: "Spaghetti",
		count: 2,
	},
];

const ShoppingCart = () => {
	const [products, setProducts] = useState(initialProducts);

	const handleIncrease = (idItem) => {
		setProducts(products.map((item) =>
				item.id === idItem ? { ...item, count: item.count + 1 } : item
			)
		);
	};

	const handleDecrease = (idItem) => {
		setProducts(products
				.map((item) =>
					item.id === idItem ? { ...item, count: item.count - 1 } : item
				)
				.filter((item) => item.count > 0)
		);
	};

	return (
		<div>
			<h3>Shopping Cart. Items: {products.length}</h3>
			{products.length === 0 ? (
				<p>No products yet</p>
			) : (
				<ul>
					{products.map(({ id, name, count }) => (
						<li key={id}>
							{name}:
							<button
								onClick={() => {
									handleDecrease(id);
								}}>
								-1
							</button>
							<b>({count})</b>
							<button
								onClick={() => {
									handleIncrease(id);
								}}>
								+1
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default ShoppingCart;
