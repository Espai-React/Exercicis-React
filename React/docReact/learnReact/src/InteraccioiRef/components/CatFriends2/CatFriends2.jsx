import { useRef } from "react";

const CatFriends2 = () => {
	const itemsRef = useRef(null);
	//console.log("itemsRef", itemsRef);	
	
	const catList = [];
	for (let i = 0; i < 10; i++) {
		catList.push({
			id: i,
			catUrl: "https://placekitten.com/200/200?image=" + i,
		});
	}
	//console.log("catList", catList);

	const getMap = () => {
		if (!itemsRef.current) itemsRef.current = new Map();
		return itemsRef.current;
	};

	const scrollToId = (id) => {
		const map = getMap();
		//console.log("map", map);
		
		const node = map.get(id);
		//console.log("node", node);
		
		node.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center",
		});
	};

	return (
		<div>
			<nav>
				<button onClick={() => scrollToId(0)}>Tom</button>
				<button onClick={() => scrollToId(5)}>Jerry</button>
				<button onClick={() => scrollToId(9)}>Manu</button>
			</nav>
			<div>
				<ul
					style={{
						width: 400,
						overflow: "hidden",
						display: "flex",
						border: "2px solid black",
						listStyle: "none",
						paddingTop: 15,
					}}>
					{catList.map((cat) => (
						<li
							key={cat.id}
							ref={(node) => {
								const map = getMap();								
								node ? map.set(cat.id, node) : map.delete(cat.id);
							}}>
							<img src={cat.catUrl} alt={"cat#" + cat.id} />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};                     

export default CatFriends2;
