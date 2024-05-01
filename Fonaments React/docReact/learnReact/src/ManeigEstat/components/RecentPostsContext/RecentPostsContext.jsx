import { DashedContext } from "../ProfileContext/ProfileContext";

const RecentPostsContext = ({ children }) => {
	const dashed = true;

	return (
		<div className="solid">
			<DashedContext.Provider value={dashed}>
				<p>Context Zone with dashed border</p>
				{children}
			</DashedContext.Provider>
		</div>
	);
};
export default RecentPostsContext;
