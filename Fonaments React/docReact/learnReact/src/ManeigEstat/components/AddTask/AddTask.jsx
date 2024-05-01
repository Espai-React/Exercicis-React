import { useState } from "react";

const AddTask = ({ handleAddTask }) => {
	const [text, setText] = useState("");

	return (
		<div>
			<input
				type="text"
				placeholder="Add task..."
				value={text}
				onChange={({ target: { value } }) => setText(value)}
			/>
			<button
				onClick={() => {
					handleAddTask(text);
					setText("");
				}}>
				Add
			</button>
		</div>
	);
};

export default AddTask;
