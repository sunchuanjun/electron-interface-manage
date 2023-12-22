const { ipcMain } = require("electron");

const fs = require("fs");
const { join } = require("path");

const { start, exit } = require("./server/index");

const dist = join(__dirname, "server");

const builtInFiles = ["header.config", "index.js"];

const file = {
	has: function (name) {
		return fs.existsSync(join(dist, name));
	},
	rm: function (name) {
		if (builtInFiles.includes(name)) return;
		return fs.rmSync(join(dist, name));
	},
	data: function (name) {
		if (!this.has(name)) return;
		return fs.readFileSync(join(dist, name), {
			encoding: "utf-8",
		});
	},
	save: function (name, data) {
		console.log(name, data);
		if (builtInFiles.includes(name)) return;
		fs.writeFileSync(join(dist, name), data);
	},
};
const server = {
	start,
	exit,
};

Object.keys(file).forEach((key) => {
	ipcMain.handle("file." + key, (e, ...args) => file[key](...args));
});

Object.keys(server).forEach((key) => {
	ipcMain.handle("server." + key, (e, ...args) => server[key](...args));
});
