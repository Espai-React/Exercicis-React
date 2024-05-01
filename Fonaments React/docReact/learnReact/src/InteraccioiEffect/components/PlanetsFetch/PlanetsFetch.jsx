import { useEffect, useState } from "react";
import PlanetSelect, { capitalize } from "../PlanetSelect/PlanetSelect";

function fetchData(url) {
	if (url === "/planets") {
		return fetchPlanets();
	} else if (url.startsWith("/planets/")) {
		const match = url.match(/^\/planets\/([\w-]+)\/places(\/)?$/);
		if (!match || !match[1] || !match[1].length) {
			throw Error(
				`Expected URL like "/planets/earth/places". Received: "${url}".`
			);
		}
		return fetchPlaces(match[1]);
	} else
		throw Error(
			`Expected URL like "/planets" or "/planets/earth/places". Received: "${url}".`
		);
}

async function fetchPlanets() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{
					id: 1,
					name: "Earth",
				},
				{
					id: 2,
					name: "Venus",
				},
				{
					id: 3,
					name: "Mars",
				},
			]);
		}, 1000);
	});
}

async function fetchPlaces(planetName) {
	if (typeof planetName !== "string") {
		throw Error(
			`fetchPlaces(planetName) expects a string argument. Instead received: "${planetName}".`
		);
	}
	return new Promise((resolve) => {
		setTimeout(() => {
			switch (planetName) {
				case "Earth": {
					resolve([
						{
							id: 1,
							name: "Laos",
						},
						{
							id: 2,
							name: "Spain",
						},
						{
							id: 3,
							name: "Vietnam",
						},
					]);
					break;
				}
				case "Venus": {
					resolve([
						{
							id: 1,
							name: "Aurelia",
						},
						{
							id: 2,
							name: "Diana Chasma",
						},
						{
							id: 3,
							name: "Kŭmsŏng Vallis",
						},
					]);
					break;
				}
				case "Mars": {
					resolve([
						{
							id: 1,
							name: "Aluminum City",
						},
						{
							id: 2,
							name: "New New York",
						},
						{
							id: 3,
							name: "Vishniac",
						},
					]);
					break;
				}
				default:
					throw Error("Unknown planet ID: " + planetName);
			}
		}, 1000);
	});
}


const PlanetsFetch = () => {
	
	const [planets, setPlanets] = useState([]);
	const [planet, setPlanet] = useState(null);
	const [places, setPlaces] = useState([]);
	const [place, setPlace] = useState(null);
	console.log("planets", planets, "planet", planet, "places", places, "place", place);
	

useEffect(() => {
	let ignore = false;
	fetchData("/planets").then((dataPlanets) => {
		if (!ignore) {
			setPlanets(dataPlanets);
		}
	});
	return () => {
		ignore = true;
		console.log("Planet fetch cleanup");		
	};
}, []);

	useEffect(() => {
		let ignore = false;
		planet && fetchData(`/planets/${planet}/places`).then((dataPlaces) => {
			if (!ignore) {
				setPlaces(dataPlaces);
			}
		});
		return () => {
			ignore = true;
			console.log("Planet fetch cleanup");
		};
	}, [planet]);
	
	
	return (
		<div>
			<h3>Planets map en Select + fetch</h3>
			<PlanetSelect
				id="planets"
				label="Planets"
				array={planets}
				value={planet}
				setValue={setPlanet}
			/>
			<PlanetSelect
				id="planets"
				label="Places"
				array={places}
				value={place}
				setValue={setPlace}
			/>
			{planet && place && (
				<p>
					You are going to: {capitalize(planet)} and {capitalize(place)}
				</p>
			)}
		</div>
	);
};

export default PlanetsFetch;
