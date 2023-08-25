import CatFriends from "./components/CatFriends";
import CatFriends2 from "./components/CatFriends2";
import Dashboard from "./components/Dashboard";
import Dashboard2 from "./components/Dashboard2/Dashboard2";
import FocusForm from "./components/FocusForm";
import FocusOnSearch from "./components/FocusOnSearch";
import KittenCarrusel from "./components/KittenCarrusel";
import LoadingInfo from "../InteraccioiEffect/components/LoadingInfo";
import MessageDelayed from "./components/MessageDelayed";
import MyForm from "./components/MyForm/MyForm";
import MyForm2 from "./components/MyForm2";
import MyInput from "./components/MyInput";
import Pilotetes from "./components/Pilotetes";
import SendChat from "./components/SendChat";
import ShowCounter from "./components/ShowCounter";
import StopWatch from "./components/StopWatch";
import TodoList from "./components/TodoList";
import VideoComp from "../InteraccioiEffect/components/VideoComp";

const InteraccioiRef = () => (
	<div>
		<FocusForm />
		<hr />
		<VideoComp />
		<hr />
		<Pilotetes />
		<hr />
		<StopWatch />
		<hr />
		<SendChat />
		<hr />
		<Dashboard />
		<hr />
		<Dashboard2 />
		<hr />
		<MessageDelayed />
		<hr />
		<CatFriends />
		<hr />
		<CatFriends2 />
		<hr />
		<MyForm />
		<hr />
		<MyForm2 />
		<hr />
		<TodoList />
		<hr />
		<FocusOnSearch />
		<hr />
		<KittenCarrusel />
		<hr />
		<MyInput />
		<hr />
		<ShowCounter />
		<hr />
	</div>
);

export default InteraccioiRef;
