const express = require("express");
const fs = require("fs");
const path = require("path");

let server,
	resourcesPath = path.join(__dirname, "../Resources"),
	configPath = resourcesPath + "/config.json";

function init(app) {
	app.use(express.json());
	app.all("*", function (req, res, next) {
		fs.readFileSync(path.join(__dirname, "./header.config"), {
			encoding: "utf8",
		})
			.split("\n")
			.filter(Boolean)
			.map((item) => item.replace(/\s/g, ""))
			.map((item) => item.split("="))
			.forEach(([key, value]) => {
				res.header(key, value);
			});
		if (req.method == "OPTIONS") {
			res.sendStatus(200);
		} else {
			next();
		}
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
		.filter((key) => key.includes(resourcesPath))
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

		const [
			{ port, staticPath, startFileName },
			points,
		] = require(configPath);

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
				require(path.join(resourcesPath, point.file))(app, point.path);
				console.log(
					`${point.name} ----> http://localhost:${port}${point.path}`
				);
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
