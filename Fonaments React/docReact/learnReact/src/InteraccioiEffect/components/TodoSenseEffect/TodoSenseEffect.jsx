import { useMemo, useState } from "react";

let nextId = 0,
	calls = 0;

export const createTodo = (text, completed = false) => ({
	id: nextId++,
	text,
	completed,
});

export const initialTodos = [
	createTodo("Get apples", true),
	createTodo("Get oranges", true),
	createTodo("Get carrots"),
];

export const NewTodo = ({ onAdd }) => {
	const [textInput, setTextInput] = useState("");

	return (
		<>
			<label htmlFor="todoText">
				<input
					type="text"
					id="todoText"
					value={textInput}
					onChange={({ target: { value } }) => setTextInput(value)}
				/>
				<button
					onClick={() => {
						onAdd(createTodo(textInput));
						setTextInput("");
					}}>
					Add
				</button>
			</label>
		</>
	);
};

export const filterTodos = (todos, active) => {
	//console.log("Filtertodos calls: ", calls++);
	const noCompletedTodos = todos.filter((todo) => !todo.completed);
	const left = noCompletedTodos.length;
	const mapTodos = active ? noCompletedTodos : todos;
	return { left, mapTodos };
};

const TodoSenseEffect = () => {
	const [todos, setTodos] = useState(initialTodos);
	const [active, setActive] = useState(false);
	const { left, mapTodos } = useMemo(
		() => filterTodos(todos, active),
		[todos, active]
	);
	//console.log("todos", todos, "active", active);

	return (
		<div>
			<h3>TodoSenseEffect (useMemo)</h3>
			<label htmlFor="checkActive">
				<input
					type="checkbox"
					id="checkActive"
					value={active}
					onChange={() => setActive(!active)}
				/>
				Show only active todos
			</label>
			<NewTodo onAdd={(newTodo) => setTodos([...todos, newTodo])} />
			<ul>
				{mapTodos.map(({ id, text, completed }) => (
					<li key={id}>{completed ? <del>{text}</del> : text}</li>
				))}
				<p>{left} todos left</p>
			</ul>
		</div>
	);
};

export default TodoSenseEffect;
