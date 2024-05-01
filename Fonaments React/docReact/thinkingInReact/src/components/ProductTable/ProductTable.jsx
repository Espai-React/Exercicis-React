import ProductRow from "../ProductRow";
import ProductCategoryRow from "../ProductCategoryRow";

const ProductTable = ({ products, filterText, inStockOnly }) => {

	const rows = [];
	let lastCategory = null;

	products.forEach(({ category, price, stocked, name }) => {
	
		if (!name.toLowerCase().includes(filterText.toLowerCase())) return;
		//if (name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) return;
		if (inStockOnly && !stocked) return;
		if (category !== lastCategory) {
			rows.push(<ProductCategoryRow category={category} key={category} />);
		}
		rows.push(
			<ProductRow price={price} stocked={stocked} name={name} key={name} />
		);
		lastCategory = category;
	});

	return (
		<table>
			<caption>Warehouse Products</caption>
			<thead>
				<tr>
					<th style={{ textAlign: "left" }}>Nom</th>
					<th style={{ textAlign: "left" }}>Preu</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

export default ProductTable;
