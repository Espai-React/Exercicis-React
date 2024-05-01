import { useRef, useEffect, useReducer } from "react";

const src =
	"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

const initialReproduccio = {
	play: false,
	pause: false,
	stop: false,
};

const reproduccioReducer = (_, { type }) => {
	switch (type) {
		case "PLAY":
			return {
				play: true,
				pause: false,
				stop: false,
			};
		case "PAUSE":
			return {
				play: false,
				pause: true,
				stop: false,
			};
		case "STOP":
			return {
				play: false,
				pause: false,
				stop: true,
			};
		default:
			throw new Error("Acció no vàlida per " + type);
	}
};

const VideoComp = () => {
	const videoRef = useRef(null);
	const [reproduccio, dispatch] = useReducer(
		reproduccioReducer,
		initialReproduccio
	);
	const { play, pause, stop } = reproduccio;

	const handlePlayPause = () => {
		play ? dispatch({ type: "PAUSE" }) : dispatch({ type: "PLAY" });
	};

	useEffect(() => {
		play && videoRef.current.play();
		pause && videoRef.current.pause();
		if (stop) {
			videoRef.current.pause();
			videoRef.current.currentTime = 0;
		}
	}, [play, pause, stop]);

	return (
		<div>
			<h3>VideoComp useReducer</h3>
			<button onClick={handlePlayPause}>{play ? "Pause" : "Play"}</button>
			<button onClick={() => dispatch({ type: "STOP" })}>Stop</button>
			<div>
				<video width="200" src={src} ref={videoRef} playsInline loop></video>
			</div>
		</div>
	);
};

export default VideoComp;
