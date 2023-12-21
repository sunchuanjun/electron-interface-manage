const generateRandomTreeData = (() => {
	let startId = 10;

	const randomCount = () => Math.floor(Math.random() * 5) + 1;

	function randomString(length, chars) {
		let result = "";
		for (let i = length; i > 0; --i)
			result += chars[Math.floor(Math.random() * chars.length)];
		return result;
	}

	class Node {
		name = randomString(6, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
		path = randomString(6, "abcdefghijklmnopqrstuvwxyz");
	}

	const randomNodes = () =>
		Array(randomCount())
			.fill(undefined)
			.map(() => new Node());

	return function generate(depth) {
		depth = Math.min(depth, 10);
		if (depth <= 0) return;
		--depth;
		return randomNodes().map((node) => {
			node.id = startId++;
			const children = generate(depth);
			if (children) {
				node.children = children;
			}
			return node;
		});
	};
})();

module.exports = function (app, path) {
	app.get(path, (req, res) => {
		const { body, params } = req;
		res.send(generateRandomTreeData(params.level));
	});
};
