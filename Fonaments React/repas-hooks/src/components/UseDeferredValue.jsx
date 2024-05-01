import { useDeferredValue, useState } from "react";

const UseDeferredValue = () => {
	const [text, setText] = useState("");
	const textTard = useDeferredValue(text, { timeoutMs: 3000 })

	return (
		<div>
			<h2>useDeferredValue</h2>
			<hr />
			<p>Text: {textTard}</p>
			<input type="text" value={text} onChange={(e) => setText(e.target.value)} />
		</div>
	);
};

export default UseDeferredValue;
