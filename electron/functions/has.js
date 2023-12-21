const fs = require("fs");
const path = require("path");

module.exports = function (e, name) {
	return fs.existsSync(path.join(__dirname, "../../Resources", name));
};
