import { initStatsCounter } from "./initStatsCounter.js";
import { initObserver } from "./initObserver";
import { initMobileMenu } from "./initMobileMenu";
import { initRandomStatCards } from "./initRandomStatCards.js";
import { initSmoothScroll } from "./initSmoothScroll.js";


export function runApp() {

  initObserver();
  initStatsCounter();
  initMobileMenu();
  initSmoothScroll();
}

