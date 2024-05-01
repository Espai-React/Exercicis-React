const ToDoList = () => {
	
	const today = new Date();
	const formatDate = (date) => new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);

	return (
		<div>
			<h1>Todo List - Hedy Lamarr's Todos for {formatDate(today)}</h1>
			<img
				src="https://i.imgur.com/yXOvdOSs.jpg"
				alt="Hedy Lamarr"
				className="avatar"
			/>
			<ul>
				<li>Invent new traffic lights</li>
				<li>Rehearse a movie scene</li>
				<li>Improve spectrum technology</li>
			</ul>
		</div>
	);
}

export default ToDoList;
