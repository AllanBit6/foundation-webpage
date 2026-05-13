// src/scripts/initStatsCounter.js

export function initStatsCounter() {
  const stats = document.querySelectorAll(".stat");
  if (!stats.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      if (el.dataset.counted === "true") return;

      const target = Number(el.dataset.target);
      const duration = target < 50 ? 1000 : 1800;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        el.textContent = Math.floor(target * eased).toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = target.toLocaleString();
          el.dataset.counted = "true";
        }
      }

      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });

  stats.forEach((s) => observer.observe(s));
}