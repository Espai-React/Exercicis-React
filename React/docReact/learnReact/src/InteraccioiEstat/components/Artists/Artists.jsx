import { useState } from "react";

const initialArtists = [
	{
		id: 0,
		name: "Marta Colvin Andrade",
	},
	{
		id: 1,
		name: "Lamidi Olonade Fakeye",
	},
	{
		id: 2,
		name: "Louise Nevelson",
	},
];

const Artists = () => {
	const [nameArtist, setNameArtist] = useState("");
	const [insertion, setInsertion] = useState("");
	const [artists, setArtists] = useState(initialArtists);
	let actualId = artists.length - 1;

	return (
		<div>
			<h1>Inspiring sculptors</h1>
			<label htmlFor="name">
				Name&nbsp;
				<input
					type="text"
					id="name"
					plaheolder="name"
					value={nameArtist}
					onChange={(e) => setNameArtist(e.target.value)}
				/>
			</label>
			<div>
				<button
					onClick={() => {
						setArtists([...artists, { id: actualId++, name: nameArtist }]);
					}}>
					Add last artist
				</button>
				<button
					onClick={() => {
						setArtists(artists.filter(({ id }) => id !== actualId));
					}}>
					Del last artist!
				</button>
				<button
					onClick={() => {
						setArtists(
							artists.filter(({ name }) => !name.includes(nameArtist))
						);
					}}>
					Del artist by name
				</button>
			</div>
			<label htmlFor="insertion">
				Position of insertion &nbsp;
				<input
					type="number"
					size="4"
					id="insertion"
					value={insertion}
					onChange={(e) => setInsertion(+e.target.value)}
				/>
			</label>
			<div>
				<button
					onClick={() => {
						setArtists((prev) => {
							const newPrev = prev.slice();
							//const newPrev = [...prev];
							newPrev.splice(insertion, 0, {
								id: actualId++,
								name: nameArtist,
							});
							return newPrev;
						});
					}}>
					Ins artist
				</button>
				<button
					onClick={() => {
						setArtists((prev) => {
							const newPrev = prev.slice();
							//const newPrev = [...prev];
							newPrev.reverse();
							return newPrev;
						});
					}}>
					Reverse List
				</button>
				<button
					onClick={() => {
						setArtists((prev) => {
							const newPrev = prev.slice();
							//const newPrev = [...prev];
							newPrev.sort((a, b) => a.name > b.name);
							return newPrev;
						});
					}}>
					Sort List by Name
				</button>
			</div>

			<span>Artists List {artists.length}:</span>
			{!artists.length > 0 ? (
				<p>No artists yet</p>
			) : (
				<ol>
					{artists.map(({ id, name }) => (
						<li key={id}>
							{name}
							<button
								onClick={() =>
									setArtists(artists.filter(({ id: ida }) => ida !== id))
								}>
								Delete
							</button>
						</li>
					))}
				</ol>
			)}
		</div>
	);
};

export default Artists;
