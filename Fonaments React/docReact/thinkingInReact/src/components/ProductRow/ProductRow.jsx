import { NameColor } from "./ProductRow.styles";

const ProductRow = ({ stocked, name, price }) => (
	<tr>
		<NameColor stocked={stocked}>{name}</NameColor>
		<td>{price}</td>
	</tr>
);

export default ProductRow;
