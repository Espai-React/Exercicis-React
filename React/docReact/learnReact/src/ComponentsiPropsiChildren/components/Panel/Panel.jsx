import { useState } from "react";

const Panel = ({ children }) => {
	const [open, setOpen] = useState(true);

	return (
		<div className="panel">
			<button onClick={() => setOpen(!open)}>
				{open ? "Collapse" : "Expand"}
			</button>
			{open && children}
		</div>
	);
};

export default Panel;
