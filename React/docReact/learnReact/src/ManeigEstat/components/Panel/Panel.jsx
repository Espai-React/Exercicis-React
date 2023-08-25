const Panel = ({ title, children, isActive, setActiveIndex }) => (
	<div>
		<h3>{title}</h3>
		{isActive ? (
			<p>{children}</p>
		) : (
			<button onClick={setActiveIndex}>Show</button>
		)}
	</div>
);

export default Panel;
