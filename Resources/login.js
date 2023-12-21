module.exports = function (app, path) {
	app.get(path, (req, res) => {
		const { body, params } = req;
		res.send("登录成功" + JSON.stringify(req, null, "\t"));
	});
};
