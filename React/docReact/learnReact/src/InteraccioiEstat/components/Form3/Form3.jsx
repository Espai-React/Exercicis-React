//import { useState } from "react";
import { useImmer } from "use-immer";

const Form3 = () => {
	/* const [person, setPerson] = useState({
		name: "Niki de Sain Paiile",
		artwork: {
			title: "Blue Nana",
			city: "Hamburg",
			image: "https://i.imgur.com/Sd1AgUOm.jpg",
		},
	});
	const {
		name,
		artwork,
		artwork: { title, city, image },
	} = person; */

	const [person, updatePerson] = useImmer({
		name: "Niki de Sain Paiile",
		artwork: {
			title: "Blue Nana",
			city: "Hamburg",
			image: "https://i.imgur.com/Sd1AgUOm.jpg",
		},
	});
	const {
		name,
		artwork: { title, city, image },
	} = person;

	/* const handleName = ({ target: { value } }) => {
		setPerson({ ...person, name: value });
	}; */
	const handleName = (e) => {
		updatePerson((draft) => {
			draft.name = e.target.value;
		});
	};

	/* const handleTitle = ({ target: { value } }) => {
		setPerson({ ...person, artwork: { ...artwork, title: value } });
	}; */
	const handleTitle = (e) => {
		updatePerson((draft) => {
			draft.artwork.title = e.target.value;
		});
	};

	/* const handleCity = ({ target: { value } }) => {
		setPerson({ ...person, artwork: { ...artwork, city: value } });
	}; */
	const handleCity = (e) =>
		updatePerson((draft) => {
			draft.artwork.city = e.target.value;
		});

	/* const handleImage = ({ target: { value } }) => {
		setPerson({ ...person, artwork: { ...artwork, image: value } });
	}; */
	const handleImage = (e) =>
		updatePerson((draft) => {
			draft.artwork.image = e.target.value;
		});

	return (
		<div>
			<div>
				<p>Change Artist</p>
				<label htmlFor="name">
					Name:
					<input type="text" id="name" value={name} onChange={handleName} />
				</label>
				<label htmlFor="title">
					Title:
					<input type="text" id="title" value={title} onChange={handleTitle} />
				</label>
				<label htmlFor="city">
					City:
					<input type="text" id="city" value={city} onChange={handleCity} />
				</label>
				<label htmlFor="image">
					Image:
					<input type="text" id="image" value={image} onChange={handleImage} />
				</label>
			</div>
			<div>
				<p>Data Artist</p>
				<p>
					{title} by {name}
				</p>
				<p>Located in {city}</p>
				<img src={image} alt={`${title} from ${name}`} />
			</div>
		</div>
	);
};

export default Form3;
