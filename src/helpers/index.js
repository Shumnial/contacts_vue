export { getRandomId };

function getRandomId() {
	return Math.random()
		.toString(32)
		.slice(2);
}
