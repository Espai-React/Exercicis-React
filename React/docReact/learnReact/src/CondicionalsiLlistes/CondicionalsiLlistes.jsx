import PackingList from "./components/PackingList/Packinglist";
import PeopleList from "./components/PeopleList";
import DrinkList from "./components/DrinkList";
import Chemists from "./components/Chemists";
import ListUUIDv4 from "./components/ListUUIDv4";
import ListUUIDcrypto from "./components/ListUUIDcrypto";
import DividedList from "./components/DividedList";
import NestedLists from "./components/NestedLists";
import NestedListsExtracted from "./components/NestedListExtracted";
import Poem from "./components/Poem";

const items = [
	{
		isPacked: true,
		name: "Space suit",
		importance: 5,
	},
	{
		isPacked: false,
		name: "Helmet with a golden leaf",
		importance: 3,
	},
	{
		isPacked: true,
		name: "T-shirt",
		importance: 8,
	},
];

export const people = [
	{
		id: 0,
		id2: crypto.randomUUID(),
		name: "Creola Katherine Johnson",
		profession: "mathematician",
		accomplishment: "spaceflight calculations",
		imageId: "MK3eW3A",
	},
	{
		id: 1,
		name: "Mario José Molina-Pasquel Henríquez",
		profession: "chemist",
		accomplishment: "discovery of Arctic ozone hole",
		imageId: "mynHUSa",
	},
	{
		id: 2,
		name: "Mohammad Abdus Salam",
		profession: "physicist",
		accomplishment: "electromagnetism theory",
		imageId: "bE7W1ji",
	},
	{
		id: 3,
		name: "Percy Lavon Julian",
		profession: "chemist",
		accomplishment:
			"pioneering cortisone drugs, steroids and birth control pills",
		imageId: "IOjWm71",
	},
	{
		id: 4,
		name: "Subrahmanyan Chandrasekhar",
		profession: "astrophysicist",
		accomplishment: "white dwarf star mass calculations",
		imageId: "lrWQx8l",
	},
];

const recipes = [
	{
		id: "greek-salad",
		name: "Greek Salad",
		ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
	},
	{
		id: "hawaiian-pizza",
		name: "Hawaiian Pizza",
		ingredients: [
			"pizza crust",
			"pizza sauce",
			"mozzarella",
			"ham",
			"pineapple",
		],
	},
	{
		id: "hummus",
		name: "Hummus",
		ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
	},
];

const poem = {
	lines: [
		"I write, erase, rewrite",
		"Erase again, and then",
		"A poppy blooms.",
	],
};

const CondicionalsiLlistes = () => (
	<div>
		<h1>Condicionals i llistes</h1>
		<hr />
		<PackingList items={items}/> 
		<hr />
		<DrinkList />
		<hr />
		<PeopleList people={people} />
		<hr />
		<Chemists people={people} />
		<hr />
		<ListUUIDcrypto people={people} />
		<hr />
		<ListUUIDv4 people={people} />
		<hr />
		<DividedList people={people} />
		<hr />
		<NestedLists recipes={recipes} />
		<hr />
		<NestedListsExtracted recipes={recipes} />
		<hr />
		<Poem poem={poem} />
		<hr />
	</div>
);

export default CondicionalsiLlistes;
