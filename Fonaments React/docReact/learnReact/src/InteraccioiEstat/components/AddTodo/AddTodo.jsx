import { useState } from "react";

const AddTodo = ({ handleAddTodo }) => {
	const [title, setTitle] = useState("");

	return (
		<div>
			<label htmlFor="inputAdd">
				New Task:{" "}
				<input
					type="text"
					id="inputAdd"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<button
					onClick={() => {
						handleAddTodo(title);
						setTitle("");
					}}>
					Add Task
				</button>
			</label>
		</div>
	);
};

export default AddTodo;
