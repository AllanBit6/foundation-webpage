// src/scripts/initSmoothScroll.js

export function initSmoothScroll() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a[href^='#']");
    if (!link) return;

    const id = link.getAttribute("href");
    if (!id || id === "#") return;

    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    history.replaceState(null, "", id);
  });
}