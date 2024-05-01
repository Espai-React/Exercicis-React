import Counter from "./components/Counter";
import Carrousel from "./components/Carrousel";
import Form from "./components/Form";
import Toolbar from "./components/Toolbar";
import TrafficLight from "./components/TrafficLight";
import RequestTracker from "./components/RequestTracker";
import Testos from "./components/Testos";
import MovingDot from "./components/MovingDot";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Canvas from "./components/Canvas";
import Artists from "./components/Artists";
import CirclesDown from "./components/CirclesDown";
import Counters from "./components/Counters";
import BucketList from "./components/BucketList";
import ShoppingCart from "./components/ShoppingCart";
import Todo from "./components/Todo";

const Interaccio = () => (
	<div>
		<Toolbar
			onPlayMovie={() => alert("playing!")}
			onUploadImage={() => alert("uploading!")}
		/>
		<hr />
		<Carrousel />
		<hr />
		<Form />
		<hr />
		<Counter />
		<hr />
		<TrafficLight />
		<hr />
		<RequestTracker />
		<hr />
		<Testos />
		<hr />
		<MovingDot />
		<hr />
		<Form2 />
		<hr />
		<Form3 />
		<hr /> */
		<Scoreboard />
		<hr />
		<Canvas />
		<hr />
		<Artists />
		<hr />
		<CirclesDown />
		<hr />
		<Counters />
		<hr />
		<BucketList />
		<hr />
		<ShoppingCart />
		<hr />
		<Todo />
		<hr />
	</div>
);

export default Interaccio;
