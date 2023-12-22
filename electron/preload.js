const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ipc", (name, ...args) =>
	ipcRenderer.invoke(name, ...args)
);
