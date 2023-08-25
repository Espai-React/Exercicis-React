import { useState } from "react";

const MovingDot = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	return (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: "300px",
				border: "2px solid orange",
			}}
			onPointerMove={(e) => {
				setPosition({
					x: e.nativeEvent.offsetX,
					y: e.nativeEvent.offsetY,
				});
			}}>
			<div
				style={{
					position: "absolute",
					left: 0,
					top: 0,
					background: "darkorange",
					borderRadius: "50%",
					width: 20,
					height: 20,
					textAlign: "center",
					transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
				}}>
				x
			</div>
		</div>
	);
};

export default MovingDot;
