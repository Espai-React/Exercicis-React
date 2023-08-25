import { useState } from "react";
import { useImmer } from "use-immer";
import AddTodo from "../AddTodo";
import TaskList from "../TaskList";

const initialTodos = [
	{
		id: 0,
		title: "Buy milk",
		done: true,
	},
	{
		id: 1,
		title: "Eat tacos",
		done: false,
	},
	{
		id: 2,
		title: "Brew tea",
		done: false,
	},
];
let nextId = 3;

const Todo = () => {
	//const [todos, setTodos] = useState(initialTodos);
	const [todos, updateTodos] = useImmer(initialTodos);

	const handleAddTodo = (title) => {
		/* setTodos([...todos, { id: nextId++, title: title, done: false }]); */
		updateTodos((draft) => {
			draft.push({ id: nextId++, title: title, done: false });
		});
	};

	const handleDeleteTodo = (id) => {
		/* setTodos(todos.filter((item) => item.id !== id)); */
		updateTodos((draft) => {
			const item = draft.findIndex((item) => item.id === id);
			draft.splice(item, 1);
		});
	};

	const handleUpdateTodo = (newTodo) => {
		/* setTodos(todos.map((item) =>
				item.id === newTodo.id
					? newTodo
					: item
			)
		); */
		updateTodos((draft) => {
			const item = draft.findIndex((item) => item.id === newTodo.id);
			draft.splice(item, 1, newTodo);
		});
	};

	return (
		<div>
			<h3>App Todo</h3>
			<AddTodo handleAddTodo={handleAddTodo} />
			<TaskList
				todos={todos}
				handleUpdateTodo={handleUpdateTodo}
				handleDeleteTodo={handleDeleteTodo}
			/>
		</div>
	);
};

export default Todo;
