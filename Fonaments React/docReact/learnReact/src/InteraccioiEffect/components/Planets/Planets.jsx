import { useState } from "react";
import PlanetSelect, { capitalize } from "../PlanetSelect/PlanetSelect";

const planetsAndPlaces = [
	["mars", "venus", "earth"],
	["mountain", "sea", "desert"],
];

const Planets = () => {

	const [planet, setPlanet] = useState(null);
	const [place, setPlace] = useState(null);	
	console.log(planet, place);	
	
	return (
		<div>
			<h3>Planets map en Select</h3>
			<PlanetSelect id="planets" label="Planets" array={planetsAndPlaces[0]} value={planet} setValue={setPlanet} />
			<PlanetSelect id="planets" label="Places" array={planetsAndPlaces[1]} value={place} setValue={setPlace} />
			{planet && place && (
				<p>You are going to: {capitalize(planet)} and {capitalize(place)}</p>
			)}
		</div>
	);
};

export default Planets;
