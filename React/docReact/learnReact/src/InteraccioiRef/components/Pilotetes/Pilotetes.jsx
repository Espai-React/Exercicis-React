import { useEffect, useState } from "react";
import Piloteta from "../Piloteta";

const Pilotetes = () => {
	const usePosicioCursor = () => {
		const [posicio, setPosicio] = useState({ x: 0, y: 0 });

		useEffect(() => {
			const handleMove = (e) => {
				setPosicio({ x: e.offsetX, y: e.offsetY });
			};
			window.addEventListener("mousemove", handleMove);
			return () => window.removeEventListener("mousemove", handleMove);
		}, []);

		return posicio;
	};

	const useDelay = (posicio, delay) => {
		const [posicioDelay, setposicioDelay] = useState(posicio);

		useEffect(() => {
			setTimeout(() => {
				setposicioDelay(posicio);
			}, delay);
		}, [posicio, posicioDelay]);

		return posicioDelay;
	};

	const posicio1 = usePosicioCursor();
	const posicio2 = useDelay(posicio1, 115);
	const posicio3 = useDelay(posicio2, 115);
	const posicio4 = useDelay(posicio3, 115);
	const posicio5 = useDelay(posicio4, 115);
	const posicio6 = useDelay(posicio5, 115);
	const posicio7 = useDelay(posicio6, 115);

	return <div style={{ position: "relative", width: "100%", height: "300px", border: "5px solid cadetBlue" }}>
		<Piloteta posicio={posicio1} opacitat={1} />
		<Piloteta posicio={posicio2} opacitat={0.8} />
		<Piloteta posicio={posicio3} opacitat={0.65} />
		<Piloteta posicio={posicio4} opacitat={0.5} />
		<Piloteta posicio={posicio5} opacitat={0.35} />
		<Piloteta posicio={posicio6} opacitat={0.2} />
		<Piloteta posicio={posicio7} opacitat={0.05} />
	</div>;
};

export default Pilotetes;
