import { useEventListener } from "../../../lib/utils/useEventListener";

const SaveButton = () => {
	const { state, setState } = useEventListener("saved", "notSaved");

	return (
		<div>
			<h3>SaveButton</h3>
			<button onClick={() => setState(!state)}>Save</button>
			<p>{state ? "✅ Saved" : "❌ Not saved"}</p>
		</div>
	);
};

export default SaveButton;
