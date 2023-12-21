const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
let server;

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
}

module.exports = {
	exit: close,
	start: async () => {
		close();
		await delay(2000);
		const [
			{ port, staticPath, startFileName },
			points,
		] = require("../Resources/config.json");

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
				require(path.join("../Resources", point.file))(app, point.path);
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
