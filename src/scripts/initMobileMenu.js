// src/scripts/initMobileMenu.js

export function initMobileMenu() {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (!btn || !menu) return;

  const freshBtn = btn.cloneNode(true);
  btn.replaceWith(freshBtn);

  freshBtn.addEventListener("click", () => {
    const isHidden = menu.classList.toggle("hidden");

    freshBtn.setAttribute(
      "aria-expanded",
      String(!isHidden)
    );
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      freshBtn.setAttribute("aria-expanded", "false");
    });
  });
}