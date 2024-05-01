import { useEffect, useState } from "react";
import PilotetaCheck from "./PilotetaCheck";

const initialPerformance = { position: { x: 0, y: 0 }, movement: true };

const PilotetesCheck = () => {
	const [performance, setPerformance] = useState(initialPerformance);
	const { position, movement } = performance;
	//console.log(movement);
	
	useEffect(() => {
		const handleMove = (e) => {
			setPerformance({
				...performance,
				position: { x: e.offsetX, y: e.offsetY },
			});
		};
		movement && window.addEventListener("mousemove", handleMove);
		return () => {
			window.removeEventListener("mousemove", handleMove);
		};
	}, [movement]);

	return (
		<>
			<h3>Pilotetes Check</h3>
			<label htmlFor="checkPiloteta">
				<input
					type="checkbox"
					id="checkPiloteta"
					checked={movement}
					onChange={() =>
						setPerformance({ ...performance, movement: !performance.movement })
					}
				/>
				Moviment de la piloteta
			</label>
			<div
				style={{
					position: "relative",
					width: "100%",
					height: "300px",
					border: movement ? "5px solid darkGreen" : "5px solid darkRed",
				}}>
				<PilotetaCheck position={position} movement={movement} />
			</div>
		</>
	);
};

export default PilotetesCheck;
