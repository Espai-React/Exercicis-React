import { useEventListener } from "../../../lib/utils/useEventListener";

const StatusBar = () => {
	const { state, setState } = useEventListener("isOnline", "isOffline");

	return (
		<div>
			<h3>StatusBar</h3>
			<button onClick={() => setState(!state)}>Switch</button>
			<p>{state ? "✅ Online" : "❌ Offline"}</p>
		</div>
	);
};

export default StatusBar;
