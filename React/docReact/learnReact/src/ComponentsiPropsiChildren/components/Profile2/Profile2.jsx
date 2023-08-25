
import Card from "../Card";
import Avatar from "../Avatar";

const Profile2 = () => (
	<div>
		<p>Profile 2</p>
		<Card>
			<p>Card</p>
			<Avatar
				size={150}
				person={{
					name: "Katusho Saruhashi",
					imageId: "YfeOqp2",
				}}
			/>
		</Card>
	</div>
);

export default Profile2;
