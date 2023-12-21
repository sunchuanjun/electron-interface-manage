const server = require("../../node/index.js");
const { ipcMain } = require("electron");

module.exports = function () {
	ipcMain.handle("has.file", require("./has.js"));
	ipcMain.handle("rm.file", require("./remove.js"));
	ipcMain.handle("get.file", require("./get.js"));
	ipcMain.handle("save.file", require("./save.js"));
	ipcMain.handle("server.start", server.start);
	ipcMain.handle("server.exit", server.exit);
};
