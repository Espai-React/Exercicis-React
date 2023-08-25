import { useContext } from "react";
import TaskContextReducer from "../TaskContextReducer/TaskContextReducer";
import { TaskContext } from "../TasksAppProvider/TasksAppProvider";

const TaskListContextReducer = () => {
	const tasks = useContext(TaskContext);

	return (
		<ul style={{ listSyle: "none" }}>
			{tasks.map((task) => (
				<div key={task.id}>
					<TaskContextReducer task={task} />
				</div>
			))}
		</ul>
	);
};

export default TaskListContextReducer;
