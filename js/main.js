// import Swiper from "swiper";
// import "swiper/css";

// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// const swiper = new Swiper(".swiper", {
//   modules: [Navigation, Pagination, Autoplay], // 👈 add this

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1320: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});
