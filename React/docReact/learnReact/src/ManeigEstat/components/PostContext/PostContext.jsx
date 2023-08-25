import { useContext } from "react";
import { DashedContext } from "../ProfileContext/ProfileContext";

const PostContext = ({ post: { title, body } }) => {
	const border = useContext(DashedContext);

	return (
		<div className={border ? "dashed" : "solid"}>
			<h4>{title}</h4>
			<p>{body}</p>
		</div>
	);
};

export default PostContext;
