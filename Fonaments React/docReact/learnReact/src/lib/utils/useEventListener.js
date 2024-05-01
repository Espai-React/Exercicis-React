import { useEffect, useState, useSyncExternalStore } from "react";

export const useEventListener = (eventToTrue, eventToFalse) => {
	const [state, setState] = useState(true);

	useEffect(() => {
		const hadnleTrue = () => setState(true);
		const handleFalse = () => setState(false);

		window.addEventListener(eventToTrue, hadnleTrue);
		window.addEventListener(eventToFalse, handleFalse);

		return () => {
			window.removeEventListener(eventToTrue, hadnleTrue);
			window.removeEventListener(eventToFalse, handleFalse);
		};
	}, []);
	return { state, setState };
};

export const useOnlineStatus = () =>
	useSyncExternalStore(
		subscribe,
		() => navigator.onLine,
		() => true
	);
