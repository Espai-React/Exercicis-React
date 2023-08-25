const Piloteta = ({ posicio, opacitat }) => (
	<div
		style={{
			position: "absolute",
			width: 30,
			height: 30,
			background: "darkOrange",
			borderRadius: "50%",
			opacity: opacitat,
			transform: `translate(${posicio.x}px, ${posicio.y}px)`,
			pointerEvents: "none",
			left: -15,
			top: -15,
		}}></div>
);

export default Piloteta;
