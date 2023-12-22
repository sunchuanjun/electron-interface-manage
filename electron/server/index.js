const express = require("express");
const fs = require("fs");
const { join } = require("path");
const ini = require("ini");

let server,
	config = join(__dirname, "config.json");

const headerConfig = Object.entries(
	ini.parse(
		fs.readFileSync(join(__dirname, "header.config"), {
			encoding: "utf8",
		})
	)
);

function init(app) {
	app.use(express.json());
	app.all("*", function (req, res, next) {
		headerConfig.forEach(([key, value]) => {
			res.header(key, value);
		});
		req.method == "OPTIONS" ? res.sendStatus(200) : next();
	});
}

function getAllChild(list) {
	if (!Array.isArray(list)) return [];
	return list.concat(...list.map((child) => getAllChild(child.children)));
}

function delay(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

function close() {
	if (!server) return;
	server.close(function () {
		console.log("Close Server");
		server = null;
	});
	server.closeAllConnections();
	server.closeIdleConnections();
	clearCache();
}

function clearCache() {
	Object.keys(require.cache)
		.filter((key) => key.includes(__dirname))
		.forEach((key) => {
			delete require.cache[require.resolve(key)];
		});
}

module.exports = {
	exit: close,
	start: async () => {
		close();
		await delay(2000);
		const app = express();

		init(app);

		const [{ port, staticPath, startFileName }, points] = require(config);

		app.use(express.static(staticPath));

		app.get("/", (req, res) => {
			res.sendFile(startFileName, {
				root: staticPath,
				headers: {
					"Content-Type": "text/html",
				},
			});
		});

		getAllChild(points).forEach((point) => {
			try {
				require(join(__dirname, point.file))(app, point.path);
			} catch (error) {
				console.error(error);
			}
		});

		server = app.listen(port, () => {
			console.log(
				`Server listening on http://localhost:${port}, Ctrl+C to stop`
			);
		});
	},
};
