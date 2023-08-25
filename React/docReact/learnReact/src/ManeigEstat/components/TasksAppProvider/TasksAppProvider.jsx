import { createContext, useReducer } from "react";

let nextId = 3;
const initialTasks = [
	{ id: 0, text: "Philosopher’s Path", done: true },
	{ id: 1, text: "Visit the temple", done: false },
	{ id: 2, text: "Drink matcha", done: false },
];

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

const tasksReducer = (tasks, action) => {
	const { type } = action;

	switch (type) {
		case "added":
			const { id: idAdded, text } = action;
			return [
				...tasks,
				{
					id: idAdded,
					text,
					done: false,
				},
			];
		case "changed":
			const {
				task: { id: idChanged },
				task: taskChanged,
			} = action;
			return tasks.map((task) => (task.id === idChanged ? taskChanged : task));
		case "deleted":
			const { id: idDeleted } = action;
			return tasks.filter(({ id }) => id !== idDeleted);
		default:
			throw Error("Unknown action " + type);
	}
};

const TasksAppProvider = ({ children }) => {
	const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

	const handleAddTask = (text) => {
		dispatch({
			type: "added",
			id: nextId++,
			text,
		});
	};

	const handleChangeTask = (task) => {
		dispatch({
			type: "changed",
			task,
		});
	};

	const handleDeleteTask = (taskId) => {
		dispatch({
			type: "deleted",
			id: taskId,
		});
	};

	return (
		<TaskContext.Provider value={tasks}>
			<TaskDispatchContext.Provider
				value={{ handleAddTask, handleChangeTask, handleDeleteTask }}>
				{children}
			</TaskDispatchContext.Provider>
		</TaskContext.Provider>
	);
};

export default TasksAppProvider;
