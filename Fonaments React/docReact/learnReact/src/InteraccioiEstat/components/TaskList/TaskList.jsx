import Task from "../Task";

const TaskList = ({ todos, handleUpdateTodo, handleDeleteTodo }) => (
	<div>
		<h3>Task List</h3>
		{todos.length === 0 ? (
			<p>No tasks yet</p>
		) : (
			<ol>
				{todos.map((todo) => (
					<li key={todo.id}>
						<Task
							todo={todo}
							handleUpdateTodo={handleUpdateTodo}
							handleDeleteTodo={handleDeleteTodo}
						/>
					</li>
				))}
			</ol>
		)}
	</div>
);

export default TaskList;
