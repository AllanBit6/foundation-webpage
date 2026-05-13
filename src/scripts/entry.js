import { runApp } from "./main.js";

runApp();

document.addEventListener("astro:page-load", runApp);
document.addEventListener("astro:after-swap", runApp);