import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [rojo, setRojo] = useState(false);
	const [amarillo, setAmarillo] = useState(false);
	const [verde, setVerde] = useState(false);
	console.log(rojo, amarillo, verde);

	const handleSemaforo = (id) => {
		console.log(id);
		switch (id) {
			case "red":
				setRojo(true);
				setAmarillo(false);
				setVerde(false);
				break;
			case "yellow":
				setRojo(false);
				setAmarillo(true);
				setVerde(false);
				break;
			case "green":
				setRojo(false);
				setAmarillo(false);
				setVerde(true);
				break;
			default:
				return "error";
		}
	};

	const selected = "3px solid white";

	return (
		<div className="text-center container ">
			<p>Hello</p>
			<div className="col-1 bg-dark text-center ">
				<ul className="p-1 d-flex flex-column justify-content-center">
					<li
						onClick={(e) => handleSemaforo(e.target.id)}
						id="red"
						className={`btn bg-danger rounded-circle col-6 mb-1 $`}
						style={{ border: rojo ? "3px solid white" : "none" }}></li>
					<li
						onClick={(e) => handleSemaforo(e.target.id)}
						id="yellow"
						className="btn bg-warning rounded-circle col-6 mb-1"
						style={{ border: amarillo && selected }}></li>
					<li
						onClick={(e) => handleSemaforo(e.target.id)}
						id="green"
						className="btn bg-success rounded-circle col-6 mb-1"
						style={{ border: verde && selected }}></li>
				</ul>
			</div>
		</div>
	);
};

export default Home;
