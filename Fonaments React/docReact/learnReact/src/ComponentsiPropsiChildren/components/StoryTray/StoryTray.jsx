const StoryTray = ({ stories }) => {
	
	let parell = (stories.length % 2 === 0) ? "parell" : "imparell";
	
	return (
		<div>
			<ul>
				{stories.map(({ id, label }) => (
					<li key={id}>{label}</li>
				))}
				<li>New Story {parell}</li>
			</ul>
		</div>
	);
};

export default StoryTray;
