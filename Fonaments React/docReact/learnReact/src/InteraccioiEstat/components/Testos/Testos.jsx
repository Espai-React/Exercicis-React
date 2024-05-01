import Case from "../Case/index";

const Tests = () => {

	const increment = (n) => n + 1;
	increment.toString = () => "(n) => n + 1";
	
	return (
		<div>
			<Case baseState={0} queue={[1, 1, 1]} expected={1} />
			<Case
				baseState={0}
				queue={[increment, increment, increment]}
				expected={3}
			/>
			<Case baseState={0} queue={[5, increment]} expected={6} />
			<Case baseState={0} queue={[5, increment, 42]} expected={42} />
		</div>
	);
};

export default Tests;
