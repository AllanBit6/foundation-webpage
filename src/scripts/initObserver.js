// src/scripts/initObserver.js

export function initObserver() {
  const elements = document.querySelectorAll(".animate:not(.active)");
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
  });

  elements.forEach((el) => observer.observe(el));
}