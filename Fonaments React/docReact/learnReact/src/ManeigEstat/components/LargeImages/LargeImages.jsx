import { createContext, useState } from "react";
import ListImages from "../ListImages";

export const places = [
	{
		id: 0,
		name: "Bo-Kaap in Cape Town, South Africa",
		description:
			"The tradition of choosing bright colors for houses began in the late 20th century.",
		imageId: "https://i.imgur.com/K9HVAGHl.jpg",
	},
	{
		id: 1,
		name: "Rainbow Village in Taichung, Taiwan",
		description:
			"To save the houses from demolition, Huang Yung-Fu, a local resident, painted all 1,200 of them in 1924.",
		imageId: "https://i.imgur.com/9EAYZrtl.jpg",
	},
	{
		id: 2,
		name: "Macromural de Pachuca, Mexico",
		description:
			"One of the largest murals in the world covering homes in a hillside neighborhood.",
		imageId: "https://i.imgur.com/DgXHVwul.jpg",
	},
	{
		id: 3,
		name: "Selarón Staircase in Rio de Janeiro, Brazil",
		description:
			'This landmark was created by Jorge Selarón, a Chilean-born artist, as a "tribute to the Brazilian people."',
		imageId: "https://i.imgur.com/aeO3rpIl.jpg",
	},
	{
		id: 4,
		name: "Burano, Italy",
		description:
			"The houses are painted following a specific color system dating back to 16th century.",
		imageId: "https://i.imgur.com/kxsph5Cl.jpg",
	},
	{
		id: 5,
		name: "Chefchaouen, Marocco",
		description:
			"There are a few theories on why the houses are painted blue, including that the color repells mosquitos or that it symbolizes sky and heaven.",
		imageId: "https://i.imgur.com/rTqKo46l.jpg",
	},
	{
		id: 6,
		name: "Gamcheon Culture Village in Busan, South Korea",
		description:
			"In 2009, the village was converted into a cultural hub by painting the houses and featuring exhibitions and art installations.",
		imageId: "https://i.imgur.com/ZfQOOzfl.jpg",
	},
];

export const ImageSizeContext = createContext();

const LargeImages = () => {
	const [isLarge, setIsLarge] = useState(false);
	const imageSize = isLarge ? "150px" : "100px";

	return (
		<ImageSizeContext.Provider value={{imageSize, isLarge}}>
			<label htmlFor="checkbox">
				<input
					type="checkbox"
					value={isLarge}
					onChange={() => setIsLarge(!isLarge)}
				/>
				Use large images
			</label>
			<ListImages places={places} 
			/>
		</ImageSizeContext.Provider>
	);
};

export default LargeImages;
