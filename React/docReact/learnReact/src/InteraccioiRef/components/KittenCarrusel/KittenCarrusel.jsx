import { useRef, useState } from "react";
import { flushSync } from "react-dom";

const catList = [];
for (let i = 0; i < 10; i++) {
	catList.push({
		id: i,
		catUrl: "https://placekitten.com/250/200?image=" + i,
	});
}

const KittenCarrusel = () => {
	const [index, setIndex] = useState(0);
	const kittenRef = useRef(null);

	return (
		<div>
			<h3>KittenCarrusel scrollIntoView</h3>
			<button
				onClick={() => {
					flushSync(() => {
						index < catList.length - 1 ? setIndex(index + 1) : setIndex(0);
					});
					kittenRef.current.scrollIntoView({
						behavior: "smooth",
						block: "nearest",
						inline: "center",
					});
				}}>
				Next
			</button>
			<div
				style={{
					display: "flex",
					gap: "10px",
					width: "300px",
					overflow: "hidden",
					border: "2px solid black",
					padding: "15px",
				}}>
				{catList.map((cat, indexMap) => (
					<div
						key={cat.id}
						style={{ background: indexMap === index ? "darkorange" : "white" }}
						ref={indexMap === index ? kittenRef : null}>
						<img
							src={cat.catUrl}
							alt={"cat#" + cat.id}
							style={{ margin: "5px" }}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default KittenCarrusel;
