const ItemList = ({ list, handleToggle }) => (
	<ul>
		{list.map(({ id, title, seen }) => (
			<li key={id}>
				<label htmlFor="check">
					<input
						type="checkbox"
						checked={seen}
						onChange={(e) => handleToggle(id, e.target.checked)}
					/>
					{title}
				</label>
			</li>
		))}
	</ul>
);

export default ItemList;
