export const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

const toCamelCase = (string) => {
	return string
		.toLowerCase()
		.replace(/[-_+/]+/g, " ")
		.split(" ")
		.map((element, index) =>
			index > 0 ? element[0].toUpperCase() + element.slice(1) : element
		)
		.join("");
};

const PlanetSelect = ({ id, label, array, value, setValue }) => (
	<label htmlFor={id}>
		{label}{" "}
		<select
			id={id}
			value={value ?? ""}
			onChange={(e) => setValue(e.target.value)}>
			<option>Selecct an option</option>
			{array &&
				array.map((element, index) => (
					<option key={element.id || index} value={element.name || element} name={toCamelCase(element.name || element)}>
						{capitalize(element.name || element)}
					</option>
				))}
		</select>
	</label>
);

export default PlanetSelect;
