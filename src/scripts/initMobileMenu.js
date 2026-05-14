export function initMobileMenu() {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (!btn || !menu) return;

  const freshBtn = btn.cloneNode(true);
  btn.replaceWith(freshBtn);

  function openMenu() {
    menu.classList.remove(
      "max-h-0",
      "opacity-0",
      "-translate-y-2",
      "pointer-events-none"
    );

    menu.classList.add(
      "max-h-96",
      "opacity-100",
      "translate-y-0",
      "pointer-events-auto"
    );

    freshBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    menu.classList.remove(
      "max-h-96",
      "opacity-100",
      "translate-y-0",
      "pointer-events-auto"
    );

    menu.classList.add(
      "max-h-0",
      "opacity-0",
      "-translate-y-2",
      "pointer-events-none"
    );

    freshBtn.setAttribute("aria-expanded", "false");
  }

  freshBtn.addEventListener("click", () => {
    const isOpen = menu.classList.contains("max-h-96");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });
}