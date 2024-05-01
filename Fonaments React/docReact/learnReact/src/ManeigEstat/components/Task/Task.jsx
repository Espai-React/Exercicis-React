import { useState } from "react";

const Task = ({ task, handleChangeTask, handleDeleteTask }) => {
	const [isEditing, setIsEditing] = useState(false);
	const { id, text, done } = task;

	return (
		<div>
			<label htmlFor="checkbox">
				<input
					type="checkbox"
					checked={done}
					onChange={(e) =>
						handleChangeTask({
							...task,
							done: e.target.checked,
						})
					}
				/>
				{isEditing ? (
					<>
						<input
							type="text"
							value={text}
							onChange={(e) =>
								handleChangeTask({
									...task,
									text: e.target.value,
								})
							}
						/>
						<button onClick={() => setIsEditing(false)}>Save</button>
					</>
				) : (
					<>
						{text}
						<button onClick={() => setIsEditing(true)}>Edit</button>
					</>
				)}
				<button onClick={() => handleDeleteTask(id)}>Delete</button>
			</label>
		</div>
	);
};

export default Task;
