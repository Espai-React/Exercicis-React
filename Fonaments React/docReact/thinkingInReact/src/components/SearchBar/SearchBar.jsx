import { Formulari } from "./SearchBar.styles";

const SearchBar = ({filterText, setFilterText, inStockOnly, setInStockOnly}) => (
		<Formulari>
			<input type="text" placeholder="Search..." value={filterText} onChange={(e) => setFilterText(e.target.value)} />
			<label htmlFor="checkbox">
			<input type="checkbox" name="checkbox" value={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} />
				Only show products in stock
			</label>
		</Formulari>
	);

export default SearchBar;
