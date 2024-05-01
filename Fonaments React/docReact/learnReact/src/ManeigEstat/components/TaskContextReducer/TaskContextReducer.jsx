import { useContext, useState } from "react";
import { TaskDispatchContext } from "../TasksAppProvider/TasksAppProvider";

const TaskContextReducer = ({ task }) => {
	const [isEditing, setIsEditing] = useState(false);
	const { id, text, done } = task;
	const { handleChangeTask, handleDeleteTask } =
		useContext(TaskDispatchContext);

	return (
		<div>
			<label htmlFor="checkbox">
				<input
					type="checkbox"
					checked={done}
					onChange={({ target: { checked } }) =>
						handleChangeTask({
							...task,
							done: checked,
						})
					}
				/>
				{isEditing ? (
					<>
						<input
							type="text"
							value={text}
							onChange={({ target: { value } }) =>
								handleChangeTask({
									...task,
									text: value,
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

export default TaskContextReducer;
