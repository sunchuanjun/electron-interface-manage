const fs = require("fs");
const path = require("path");

module.exports = function (e, name, data) {
	fs.writeFileSync(path.join(__dirname, "../../Resources", name), data);
};
