const PilotetaCheck = ({ position: { x, y }, movement }) => {
	//console.log(x, y);

	return (
		<div
			style={{
				position: "absolute",
				width: 15,
				height: 15,
				left: 0,
				top: 0,
				backgroundColor: "darkOrange",
				borderRadius: "50%",
				opacity: movement ? 0.8 : 0.2,
				pointerEvents: "none",
				transform: `translate(${x}px, ${y}px)`,
			}}></div>
	);
};
export default PilotetaCheck;
