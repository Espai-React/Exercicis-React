import { useImmer } from "use-immer";
import Background from "../Background";
import Box from "../Box";

const intialPosition = {
	x: 0,
	y: 0,
};

const Canvas = () => {
	const [shape, updateShape] = useImmer({
		color: "orange",
		position: intialPosition,
	});
	const { color, position } = shape;

	const handleChangeColor = ({ target: { value } }) => {
		updateShape((draft) => {
			draft.color = value;
		});
	};

	const handleMove = (dx, dy) => {
		updateShape((draft) => {
			draft.position.x += dx;
			draft.position.y += dy;
		});
	};

	return (
		<div>
			<select
				style={{ margin: "10px 0" }}
				value={color}
				onChange={handleChangeColor}>
				<option value="orange">Orange</option>
				<option value="lightpink">Lightpink</option>
				<option value="aliceblue">Aliceblue</option>
			</select>
			<Background position={intialPosition}>
				<Box color={color} position={position} handleMove={handleMove}>
					Drag me!
				</Box>
			</Background>
		</div>
	);
};

export default Canvas;
