import { useReducer } from "react";
import { useImmerReducer } from "use-immer";
import AddTask from "../AddTask";
import TaskLists from "../TaskLists";

const initialTasks = [
	{
		id: 0,
		text: "Visit Kafka Musesum",
		done: true,
	},
	{
		id: 1,
		text: "Watch a puppet show",
		done: false,
	},
	{
		id: 2,
		text: "Lenno Wall pic",
		done: false,
	},
];
let nextId = 3;

const tasksReducer = (tasks, action) => {
	//const tasksReducer = (state, action)
	//const tasksReducer = (tasks, action)
	// action.type
	// action.id
	// action.text
	// action.task.id ...
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
		/* draft.push({
				id,
				text,
				done: false,
			});
			break; */
		case "changed":
			const {
				task: { id: idTask },
				task,
			} = action;
			return tasks.map((taskItem) =>
				taskItem.id === idTask ? task : taskItem
			);
		/* const index = draft.findIndex((taskItem) => taskItem.id === id);
			draft[index] = task;
			break; */
		case "deleted":
			const { id: idDeleted } = action;
			return tasks.filter((taskItem) => taskItem.id !== idDeleted);
		/* return draft.filter((taskItem) => taskItem.id !== id); */
		default:
			throw Error("unknown action" + type);
	}
};

const TaskApp = () => {
	const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
	/* const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks); */

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
		<div>
			<h3>Task App Reducer</h3>
			<h4>Prague Itinerary</h4>
			<AddTask handleAddTask={handleAddTask} />
			<TaskLists
				tasks={tasks}
				handleChangeTask={handleChangeTask}
				handleDeleteTask={handleDeleteTask}
			/>
		</div>
	);
};

export default TaskApp;
