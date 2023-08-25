import { useEffect, useRef } from "react";

const useFadeIn = (refAnimation, duration) => {

	useEffect(() => {
		const node = refAnimation.current;
		let startTime = performance.now();
		let frameId = null;

		const onFrame = (now) => {
			const timePassed = now - startTime;
			const progress = Math.min(timePassed / duration, 1);
			onProgress(progress);
			if (progress < 1) frameId = requestAnimationFrame(onFrame);
		};

		const onProgress = (progress) => {
			node.style.opacity = progress;
		};
		const start = () => {
			onProgress(0);
			startTime = performance.now();
			frameId = requestAnimationFrame(onFrame);
		};
		const stop = () => {
			cancelAnimationFrame(frameId);
			startTime = null;
			frameId = null;
		};
		start();

		return () => {
			stop();
		};
	}, [refAnimation, duration]);
};

const Welcome = () => {
	const refAnimation = useRef();
	useFadeIn(refAnimation, 1000);

	return (
		<div
			ref={refAnimation}
			style={{
				opacity: 0,
				color: "white",
				padding: 50,
				textAlign: "center",
				fontSize: 25,
				backgroundImage:
					"radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
			}}>
			Welcome
		</div>
	);
};

export default Welcome;
