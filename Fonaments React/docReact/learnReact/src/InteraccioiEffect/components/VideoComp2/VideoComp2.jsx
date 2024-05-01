import { useEffect, useRef, useState } from "react";

const VideoComp = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [text, setText] = useState("");
	//console.log(text);	
	const videoRef = useRef(null);

	useEffect(() => {
		if (isPlaying) {
			videoRef.current.play();
			//console.log("Video playing!");
		} else {
			videoRef.current.pause();
			//console.log("Video paused!");
		}
	}, [isPlaying]);

	return (
		<div>
			<div>
				<h3>Check useEffect dependencies</h3>
				<label htmlFor="inputVideo"><input type="text" id="inputVideo" value={text} onChange={(e) => setText(e.target.value)}/></label>
				<button onClick={() => setIsPlaying(!isPlaying)}>
					{isPlaying ? "Pause" : "Play"}
				</button>
			</div>
			<video
				width="200"
				ref={videoRef}
				loop
				playsInline
				/*
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
				*/
			>
				<source
					src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
					type="video/mp4"></source>
			</video>
		</div>
	);
};

export default VideoComp;
