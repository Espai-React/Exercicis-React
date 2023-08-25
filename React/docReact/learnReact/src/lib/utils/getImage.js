export const getImage = (person, size = 's') => {
	let image = (typeof person === "string") ? person : person.imageId;
	return "https://i.imgur.com/" + image + size + '.jpg';
};
