import { useRef } from "react";

const CatFriends = () => {

	const firstCat = useRef(null);
	const secondCat = useRef(null);
	const thirdCat = useRef(null);

	const handleClick = (id) => {
		let ref = id === "1" ? firstCat : id === "2" ? secondCat : thirdCat;
		ref.current.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center",
		});
	};

	return (
		<div>
			<nav>
				<button id="1" onClick={() => handleClick("1")}>
					Tom
				</button>
				<button id="2" onClick={() => handleClick("2")}>
					Jerry
				</button>
				<button id="3" onClick={() => handleClick("3")}>
					Manu
				</button>
			</nav>
			<div>
				<ul
					style={{
						width: 200,
						overflow: "hidden",
						display: "flex",
						border: "2px solid black",
						listStyle: "none",
						paddingTop: 15,
					}}>
					<li>
						<img
							src="https://placekitten.com/g/200/200"
							alt="Tom"
							ref={firstCat}
						/>
					</li>
					<li>
						<img
							src="https://placekitten.com/g/300/200"
							alt="Jerry"
							ref={secondCat}
						/>
					</li>
					<li>
						<img
							src="https://placekitten.com/g/250/200"
							alt="Manu"
							ref={thirdCat}
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default CatFriends;
