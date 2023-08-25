import { useReducer } from "react";

const TodoUseReducer = () => {
	const tasquesInicials = [
		{
			id: "a",
			nom: "Aprendre React",
			completada: true,
		},
		{
			id: "b",
			nom: "Aprendre Firebase",
			completada: false,
		},
	];

	//const todoReducer = (state, action) => ...
	const todoReducer = (tasques, { type, id }) => {
		switch (type) {
			case "FER_TODO":
				console.log("fer");
				return tasques.map((tasca) => {
					if (tasca.id === id) return { ...tasca, completada: true };
					else return tasca;
				});
			case "DESFER_TODO":
				console.log("desfer");
				return tasques.map((tasca) => {
					if (tasca.id === id) return { ...tasca, completada: false };
					else return tasca;
				});
			default:
				return "tasques";
		}
	};

	const [tasques, dispatch] = useReducer(todoReducer, tasquesInicials);
	console.log(tasques);

	const handleChange = (checked, id) => {
		console.log("handle", checked, id);
		dispatch({
			type: checked ? "FER_TODO" : "DESFER_TODO",
			id: id,
		});
	};

	return (
		<div>
			<p>Llista de tasques</p>
			<ul>
				{tasques.map(({id, nom, completada}) => (
					<div key={id}>
						<p>
							{id} - {nom}
						</p>
						<label htmlFor="checkbox">
							Completada
							<input
								type="checkbox"
								defaultChecked={completada}
								onChange={(e) => handleChange(e.target.checked, id)}
							/>
						</label>
					</div>
				))}

			</ul>
		</div>
	);
};

export default TodoUseReducer;

