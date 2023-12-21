const fs = require("fs");
const path = require("path");
const has = require("./has");

module.exports = function (e, name) {
	if (has(e, name)) {
		return fs.readFileSync(path.join(__dirname, "../../Resources", name), {
			encoding: "utf-8",
		});
	}
};
