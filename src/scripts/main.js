import { initStatsCounter } from "./initStatsCounter.js";
import { initObserver } from "./initObserver.js";
import { initMobileMenu } from "./initMobileMenu.js";
import { initRandomStatCards } from "./initRandomStatCards.js";
import { initSmoothScroll } from "./initSmoothScroll.js";

export function runApp() {
  initObserver();
  initStatsCounter();
  initMobileMenu();
  initRandomStatCards();
  initSmoothScroll();
}
