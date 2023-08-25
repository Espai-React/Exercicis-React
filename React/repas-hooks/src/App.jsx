import "./App.css";
import UseEffect from "./components/UseEffect";
import UseReducer from "./components/UseReducer";
import UseState from "./components/UseState";
import UseStateHeredat from "./components/UseStateHeredat";
import UseRef from "./components/UseRef";
import UseLayoutEffect from "./components/UseLayoutEffect";
import UseImperativeHandle from "./components/UseImperativeHandle";
import UseContext from "./components/UseContext";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";
import UseForwardRef from "./components/UseForwardRef";
import UseDeferredValue from "./components/UseDeferredValue";

const App = () => (
	<div className="App">
		<h1>Curs Hooks</h1>
		<UseState />
		<UseStateHeredat />
		<UseReducer />
		<UseEffect />
		<UseRef />
		<UseForwardRef />
		<UseLayoutEffect />
		<UseImperativeHandle />
		<UseContext />
		<UseMemo />
		<UseCallback />
		<UseDeferredValue/>
	</div>
);

export default App;
