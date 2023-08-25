export const submitForm = (answer) => {

	return new Promise((resolve, reject) => {

		setTimeout(() => {
			let shouldBeError = answer.toLowerCase() !== "lima";
			if (shouldBeError) {
				reject(new Error("Good guess but a wrong answer. Try again!"));
			} else resolve();
		}, 1500);
	});
};
