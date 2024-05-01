const ProductCaregoryRow = ({ category }) => (
		<tr>
		<th colSpan="2" style={{ textAlign: "left", borderBottom: "1px solid white" }}>
				{category}
			</th>
		</tr>
);

export default ProductCaregoryRow;
