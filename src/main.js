import "./global.css";
import App from "./App.svelte";
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/shoelace.js";


setBasePath("shoelace");

const app = new App({ target: document.body });

export default app;
