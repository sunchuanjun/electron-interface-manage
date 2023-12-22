import "./global.css";
import App from "./App.svelte";
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/shoelace.js";

setBasePath("shoelace");

if (!window.ipc) window.ipc = function () {};

const app = new App({ target: document.body });

export default app;
