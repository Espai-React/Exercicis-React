import Avatar4 from "../Avatar4";
import { getImage } from "../../../lib/utils/getImage";

const Profile4 = () => {
	
	const thumbnailsSizes = [["s", 60], ["m", 120], ["b", 180]];
	
	return (
		<div>
			{thumbnailsSizes.map((kit, index) => (
				<Avatar4 key={index}
					person={{
						name: "Gregorio Y. Zara",
						imageId: "7vQD0fP",
					}}
					size={kit[1]}
					getImage={getImage}
					thumbnail={kit[0]}
				/>
			))}
		
		</div>
	);
};

export default Profile4;
