import AddTaskContextReducer from "../AddTaskContextReducer";
import TaskListContextReducer from "../TaskListContextReducer";
import TasksAppProvider from "../TasksAppProvider";

const TaskAppContextReducer = () => {	

	return (
		<div>
			<h3>Task App Reducer + Context</h3>
			<h4>Day off in Kyoto</h4>
			<TasksAppProvider>
				<AddTaskContextReducer />
				<TaskListContextReducer />
			</TasksAppProvider>
		</div>
	);
};

export default TaskAppContextReducer;
