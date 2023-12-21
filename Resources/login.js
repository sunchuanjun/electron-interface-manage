module.exports = function (app,name) {
	app.get(name, (req, res) => {
		const { body, params } = req;
		res.send("登录成功");
	});
};
