// src/scripts/initSwiper.js

import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

let teamSwiper = null;

export function initTeamSwiper() {
  const slider = document.querySelector(".teamSwiper");
  if (!slider) return;

  if (teamSwiper) {
    teamSwiper.destroy(true, true);
    teamSwiper = null;
  }

  teamSwiper = new Swiper(slider, {
    modules: [Navigation, Autoplay],
    loop: true,
    speed: 700,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: slider.querySelector(".swiper-button-next"),
      prevEl: slider.querySelector(".swiper-button-prev"),
    },
  });
}