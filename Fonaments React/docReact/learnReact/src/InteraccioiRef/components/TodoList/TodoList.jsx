import { useRef, useState } from "react";
import { flushSync } from "react-dom";

let initialTodos = [];
let nextId = 0;
for (let i = 0; i < 5; i++) {
	initialTodos.push({
		id: nextId++,
		text: `Task ${nextId}`,
	});
}

const TodoList = () => {
	const [todos, setTodos] = useState(initialTodos);
	const [id, setId] = useState(initialTodos.length);
	const listRef = useRef(null);
	//console.log(todos, nextId, id);

	const HandleAdd = () => {
		const newTodo = { id: id, text: `Task ${id + 1}` };
		flushSync(() => {
			setTodos((prev) => [...prev, newTodo]);
		});
		setId(id + 1);
		//console.log("id2", id);
		
		listRef.current.lastChild.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
		});
	};

	return (
		<div>
			<h3>TodoList flushSync</h3>
			<button onClick={HandleAdd}>Add</button>
			<ul ref={listRef}>
				{todos.map((todo) => (
					<li key={todo.id}>{todo.text}</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
