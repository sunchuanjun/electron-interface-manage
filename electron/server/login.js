module.exports = function (app, path) {
	app.get(path, (req, res) => {
		const { body, params } = req;
		const { username, password } = body;

		if (username === "admin" && password === "12345678") {
			res.send("登录成功");
		} else {
			res.send("登录失败");
		}
	});
};
