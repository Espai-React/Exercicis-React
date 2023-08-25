import Task from "../Task/Task";

const TaskLists = ({ tasks, ...props }) => (
	<ul style={{ listStyle: "none" }}>
		{tasks.map((task) => (
			<Task key={task.id} task={task} {...props} />
		))}
	</ul>
);

export default TaskLists;

/* const TaskLists = (props) => (
	<ul style={{ listStyle: "none" }}>
		{props.tasks.map((task) => (
			<div>
				<Task key={task.id} task={task} {...props} />
				<p>task {task.id}</p>
			</div>
		))}
	</ul>
); */
