const Background = ({ children }) => (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: 350,
				background: "rgba(200, 200, 0, 0.2)",
				border: "1px solid black",
			}}>
			{children}
		</div>
	);

export default Background;
