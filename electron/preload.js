const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("runMainFn", (name, ...args) =>
	ipcRenderer.invoke(name, ...args)
);
