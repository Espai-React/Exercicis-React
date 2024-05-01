import CounterWithHook from "./components/CounterWithHook";
import FormHook from "./components/FormHook";
import PilotetesHook from "./components/PilotetesHook";
import SaveButton from "./components/SaveButton";
import StatusBar from "./components/StatusBar";
import WelcomeCSS from "./components/WelcomeCSS";
import WelcomeRefactor from "./components/WelcomeRefactor";

const CustomHooks = () => (
	<div>
		<SaveButton />
		<hr />
		<StatusBar />
		<hr />
		<FormHook />
		<hr />
		<WelcomeRefactor />
		<hr />
		<WelcomeCSS />
		<hr />
		<CounterWithHook />
		<hr />
		<PilotetesHook />
		<hr />
	</div>
);

export default CustomHooks;
