import { useState } from "react";

const Task = ({ todo, handleDeleteTodo, handleUpdateTodo }) => {
	const [edit, setEdit] = useState(false);
	const { id, title, done } = todo;

	return (
		<label htmlFor={`check ${id}`}>
			{edit ? (
				<>
					<input
						type="text"
						value={title}
						onChange={(e) =>
							handleUpdateTodo({ ...todo, title: e.target.value })
						}
					/>
					<button onClick={() => setEdit(false)}>Save</button>
				</>
			) : (
				<>
					<input
						type="checkbox"
						id={`check ${id}`}
						checked={done}
						onChange={(e) =>
							handleUpdateTodo({ ...todo, done: e.target.checked })
						}
					/>
					{done ? <del>{title}</del> : title}
					<button onClick={() => setEdit(true)}>Edit</button>
				</>
			)}
			<button onClick={() => handleDeleteTodo(id)}>Delete</button>
		</label>
	);
};

export default Task;
