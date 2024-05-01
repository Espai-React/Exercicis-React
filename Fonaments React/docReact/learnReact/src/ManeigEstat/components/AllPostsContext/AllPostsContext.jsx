import PostContext from "../PostContext";
import RecentPostsContext from "../RecentPostsContext";

const AllPostsContext = ({ posts }) => (
	<div className="solid">
		<h3>Posts</h3>
		<RecentPostsContext>
			<PostContext post={posts[1]} />
			<PostContext post={posts[2]} />
		</RecentPostsContext>
		<PostContext post={posts[3]}/>
	</div>
);

export default AllPostsContext;
