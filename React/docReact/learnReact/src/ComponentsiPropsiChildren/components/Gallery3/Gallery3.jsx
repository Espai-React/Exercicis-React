import Profile3 from "../Profile3";
import { getImage } from "../../../lib/utils/getImage";

const Gallery3 = () => {
	const scientists = [
		{
			person: {
				name: "Maria Skłodowska-Curie",
				imageId: "szV5sdG",
			},
			size: 85,
			profession: "physicist and chemist",
			awards: [
				"Nobel Prize in Physics",
				"Nobel Prize in Chemistry",
				"Davy Medal",
				"Matteucci Medal",
			],
			discovered: "polonium (element)",
		},
		{
			person: {
				name: "Katsuko Saruhashi",
				imageId: "YfeOqp2",
			},
			size: 85,
			profession: "geochemist",
			awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
			discovered: "a method for measuring carbon dioxide in seawater",
		},
	];

	return (
		<div>
			<h2>Gallery 3 - Notable scientists</h2>
			{scientists.map((scientist, index) => (
				<Profile3
					key={index}
					scientist={scientist}					
					getImage={getImage}				
				/>
			))}
		</div>
	);
};

export default Gallery3;
