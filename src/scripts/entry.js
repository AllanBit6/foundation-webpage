  import { runApp } from "../scripts/main.js";

  const run = () => {
    requestAnimationFrame(() => {
      runApp();
    });
  };

  run();

  document.addEventListener("astro:page-load", run);
  document.addEventListener("astro:after-swap", run);