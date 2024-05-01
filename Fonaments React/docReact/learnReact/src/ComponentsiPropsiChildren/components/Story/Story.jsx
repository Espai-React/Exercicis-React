import StoryTray from "../StoryTray";

let stories = [
	{
		id: 0,
		label: "Ankit's Story",
	},
	{
		id: 1,
		label: "Taylor's Story",
	},
];

const Story = () => {
	if (stories.length > 10) stories.length = 10;

	return (
		<div>
			<h3>Stories</h3>
			<StoryTray stories={stories}
			
			/>
		</div>
	);
};

export default Story;
