import { initStatsCounter } from "./initStatsCounter.js";
import { initObserver } from "./initObserver";
import { initMobileMenu } from "./initMobileMenu";
import { initTeamSwiper } from "./initSwiper";
import { initSmoothScroll } from "./initSmoothScroll.js";

export function runApp() {
  initObserver();
  initStatsCounter();
  initMobileMenu();
  initTeamSwiper();
  initSmoothScroll();
}