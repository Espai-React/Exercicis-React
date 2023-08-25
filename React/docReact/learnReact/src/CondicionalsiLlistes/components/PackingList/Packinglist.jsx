import Item from "../Item";
import Item2 from "../Item2";
import Item3 from "../Item3";
import Item4 from "../Item4";
import Item5 from "../Item5/Item5";

const PackingList = ({ items }) => (
	<div>
		<ul>
			<h4>Item amb ternari del / ins</h4>
			{items.map((item, index) => (
				<Item key={index} item={item} />
			))}
		</ul>
		<hr />
		<ul>
			<h4>Item amb ternari + null</h4>
			{items.map((item, index) => (
				<Item2 key={index} item={item} />
			))}
		</ul>
		<hr />
		<ul>
			<h4>Item amb operador &&</h4>
			{items.map((item, index) => (
				<Item3 key={index} item={item} />
			))}
		</ul>
		<hr />
		<ul>
			<h4>Item amb condicional i variable</h4>
			{items.map((item, index) => (
				<Item4 key={index} item={item} />
			))}
		</ul>
		<hr />
		<ul>
			<h4>Item amb condicional && i variable</h4>
			{items.map((item, index) => (
				<Item5 key={index} item={item} />
			))}
		</ul>
	</div>
);

export default PackingList;
