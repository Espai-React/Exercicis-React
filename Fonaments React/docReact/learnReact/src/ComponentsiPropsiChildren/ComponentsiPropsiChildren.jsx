import Profile from './components/Profile';
import Profile2 from './components/Profile2';
import ToDoList from './components/TodoList';
import ToDoList2 from './components/ToDoList2';
import Gallery3 from "./components/Gallery3";
import Profile4 from "./components/Profile4";
import Profile5 from "./components/Profile5/index";
import Gallery from "./components/Gallery";
import ChaiRecipe from './components/ChaiRecipe';
import TeaGathering from './components/TeaGathering';
import Time from './components/Time';
import Profile6 from "./components/Profile6";
import Story from './components/Story';

const ComponentsiPropsiChildren = () => (
	<>
		<h1>Component, Props i Children</h1>
		<hr />
		<Profile />
		<hr />
		<Gallery />
		<hr />
		<ToDoList />
		<hr />
		<ToDoList2 />
		<hr />
		<Profile2 />
		<hr />
		<Gallery3 />
		<hr />
		<Profile4 />
		<hr />
		<Profile5 />
		<hr />
		<ChaiRecipe />
		<hr />
		<TeaGathering />
		<hr />
		<Time />
		<hr />
		<Profile6
			person={{
				imageId: "lrWQx8l",
				name: "Subrahmanyan Chandrasekhar",
			}}
		/>
		<Profile6
			person={{
				imageId: "MK3eW3A",
				name: "Creola Katherine Johnson",
			}}
		/>
    <hr />
    <Story />
    <hr />
	</>
);

export default ComponentsiPropsiChildren;
