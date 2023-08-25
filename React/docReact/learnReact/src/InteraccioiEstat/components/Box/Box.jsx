import { useState } from "react";

const Box = ({ children, color, position: { x, y }, handleMove }) => {

	const [lastCoordinates, setLastCoordinates] = useState(null);

	const handlePointerClick = (e) => {
		e.target.setPointerCapture(e.pointerId);
		setLastCoordinates({
			x: e.clientX,
			y: e.clientY,
		});
	};

	const handlePointerMove = (e) => {
		if (lastCoordinates) {
			setLastCoordinates({
				x: e.clientX,
				y: e.clientY,
			});
			const dx = e.clientX - lastCoordinates.x;
			const dy = e.clientY - lastCoordinates.y;
			handleMove(dx, dy);
		}
	};

	const handlePointerUnclick = () => {
		setLastCoordinates(null);
	};

	return (
		<div
			style={{
				width: 100,
				height: 100,
				cursor: "grab",
				backgroundColor: color,
				position: "absolute",
				top: "calc(50% - 50px)",
				left: "calc(50% - 50px)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				border: "1px solid black",
				transform: `translate( ${x}px, ${y}px )`,
			}}
			onPointerDown={handlePointerClick}
			onPointerMove={handlePointerMove}
			onPointerUp={handlePointerUnclick}>
			{children}
		</div>
	);
};

export default Box;
