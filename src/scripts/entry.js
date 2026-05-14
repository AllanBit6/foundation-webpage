  import { runApp } from "./main.js";

  const run = () => {
    requestAnimationFrame(() => {
      runApp();
    });
  };

  run();

  document.addEventListener("astro:page-load", run);
  document.addEventListener("astro:after-swap", run);