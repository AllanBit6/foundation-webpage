const statCardImages = [
  "/images/home1.JPG",
  "/images/graduacion2023.jpg",
  "/images/graduacion2024.JPG",
  "/images/emprendimiento.jpg",
  "/images/health.jpg",
  "/images/proyectoambiente.jpg",
  "/images/apadrinamiento.JPG",
  "/images/escuela20216.jpg",
  "/images/carreras.png",
  "/images/trabajoambiente.jpg",
];

function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomPosition() {
  const x = Math.floor(Math.random() * 101);
  const y = Math.floor(Math.random() * 101);

  return `${x}% ${y}%`;
}

function randomDelay() {
  return 4000 + Math.floor(Math.random() * 1001);
}

export function initRandomStatCards() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const cards = document.querySelectorAll("[data-random-stat-card]");
  if (!cards.length) return;

  cards.forEach((card, index) => {
    if (card.dataset.randomStatReady === "true") return;

    const imageLayer = card.querySelector("[data-random-stat-image]");
    if (!imageLayer) return;

    card.dataset.randomStatReady = "true";
    card.dataset.imageVisible = "false";

    const moveImage = () => {
      if (!document.body.contains(card)) {
        return;
      }

      imageLayer.style.backgroundImage = `url("${randomFrom(statCardImages)}")`;
      imageLayer.style.backgroundPosition = randomPosition();
      card.dataset.imageVisible = "true";

      window.requestAnimationFrame(() => {
        if (!document.body.contains(card)) return;

        imageLayer.style.backgroundPosition = randomPosition();
      });

      window.setTimeout(() => {
        if (!document.body.contains(card)) return;

        card.dataset.imageVisible = "false";

        window.setTimeout(() => {
          if (!document.body.contains(card)) return;

          imageLayer.style.backgroundImage = "none";
          window.setTimeout(moveImage, randomDelay());
        }, 750);
      }, 2600);
    };

    window.setTimeout(moveImage, index * 220 + randomDelay());
  });
}
