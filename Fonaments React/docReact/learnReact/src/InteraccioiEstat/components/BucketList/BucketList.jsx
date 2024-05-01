import { useState } from "react";
import { useImmer } from "use-immer";
import ItemList from "../ItemList";

const initialList = [
	{
		id: 0,
		title: "Big Bellies",
		seen: false,
	},
	{
		id: 1,
		title: "Lunar Landscape",
		seen: false,
	},
	{
		id: 2,
		title: "Terracotta Army",
		seen: true,
	},
];

const BucketList = () => {
	//const [myList, setMyList] = useState(initialList);
	//const [yourList, setYourList] = useState(initialList);
	const [myList, updateMyList] = useImmer(initialList);
	const [yourList, updateYourList] = useImmer(initialList);

	/* const handleToggleMyList = (idItem, checked) => {
		setMyList((prev) => prev.map((item) => idItem === item.id ? { ...item, seen: checked } : item));
	};

	const handleToggleYourList = (idItem, checked) => {
		setYourList((prev) => {
			return prev.map((item) => {
				return idItem === item.id ? { ...item, seen: checked } : item;
			});
		});
	}; */

	const handleToggleMyList = (idItem, checked) => {
		updateMyList((draft) => {
			draft.map((item) => {
				if (idItem === item.id) item.seen = checked;
			});
		});
	};

	const handleToggleYourList = (idItem, checked) => {
		updateYourList((draft) => {
			draft.find((item) => idItem === item.id).seen = checked;
		});
	};

	return (
		<div>
			<h3>Bucket List</h3>
			<p>My list of art to see:</p>
			<ItemList list={myList} handleToggle={handleToggleMyList} />
			<p>Your list of art to see:</p>
			<ItemList list={yourList} handleToggle={handleToggleYourList} />
		</div>
	);
};

export default BucketList;
