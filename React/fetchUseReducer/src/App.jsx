import "./App.css";
import FetchUseReducer from "./components/FetchUseReducer/FetchUseReducer";
import TodoUseReducer from "./components/TodoUseReducer/TodoUseReducer";

const App = () => (
	<div>
		<FetchUseReducer />
		<hr />
		<TodoUseReducer />
	</div>
);

export default App;
