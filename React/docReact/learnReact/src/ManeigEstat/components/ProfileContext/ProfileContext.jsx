import { createContext } from "react";
import AllPostsContext from "../AllPostsContext";
import PostContext from "../PostContext";

const posts = [
	{
		title: "Hello traveler!",
		body: "Read about my adventures",
	},
	{
		title: "Flavors of Lisbon",
		body: "...those pastéis de nata",
	},
	{
		title: "Buenos Aires in the rhythm of tango",
		body: "I loved it!",
	},
	{
		title: "The best of the best",
		body: "I love it!",
	},
];

export const DashedContext = createContext(false);

const ProfileContext = () => (
	<div>
		<h3>Profile Context</h3>
		<div className="solid">
			<h3>My Profile</h3>
			<PostContext post={posts[0]} />
			<AllPostsContext posts={posts} />
		</div>
	</div>
);

export default ProfileContext;
