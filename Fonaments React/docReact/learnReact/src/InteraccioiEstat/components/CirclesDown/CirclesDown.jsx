import { useState } from "react";

const initialShapes = [
	{
		id: 0,
		type: "circle",
		x: 50,
		y: 100,
	},
	{
		id: 1,
		type: "square",
		x: 150,
		y: 100,
	},
	{
		id: 2,
		type: "circle",
		x: 250,
		y: 100,
	},
];

const CirclesDown = () => {
	const [shapes, setShapes] = useState(initialShapes);
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount((prev) => ++prev % shapes.length);
		setShapes(
			shapes.map((shape) => {
				return shape.type !== "circle"
					? shape
					: {
							...shape,
							y: 50 * count + 100,
					  };
			})
		);
	};

	return (
		<>
			<button onClick={handleClick}>Move circles down!</button>
			<div
				style={{
					position: "relative",
					width: "100%",
					height: 300,
					border: "2px solid black",
				}}>
				{shapes.map(({ id, type, x, y }) => (
					<div
						key={id}
						style={{
							background: "purple",
							position: "absolute",
							left: x,
							top: y,
							borderRadius: type === "circle" ? "50%" : "",
							width: 20,
							height: 20,
						}}></div>
				))}
			</div>
		</>
	);
};

export default CirclesDown;
