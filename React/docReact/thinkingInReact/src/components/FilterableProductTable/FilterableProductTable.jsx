import ProductTable from "../ProductTable/ProductTable";
import SearchBar from "../SearchBar";
import { Contenidor } from "./FilterableProductTable.styles";
import { useState } from "react";

const FilterableProductTable = ({ products }) => {
	const [filterText, setFilterText] = useState("");
	const [inStockOnly, setInStockOnly] = useState(false);
	console.log(filterText, inStockOnly);
	

	return (
		<Contenidor>
			<SearchBar
				filterText={filterText}
				setFilterText={setFilterText}
				inStockOnly={inStockOnly}
				setInStockOnly={setInStockOnly}
			/>
			<ProductTable
				products={products}
				filterText={filterText}
				inStockOnly={inStockOnly}
			/>
		</Contenidor>
	);
};

export default FilterableProductTable;
