import Swiper, { Navigation, Pagination } from "swiper";

document.addEventListener("DOMContentLoaded", function () {
  if (window.matchMedia("(max-width: 767px)").matches) {
    // // свайпер у нас будет работать, если разрешение эерана не превышает 767px
    let swiper = new Swiper(".swiper-container", {
      modules: [Pagination],
      direction: "horizontal",
      loop: true, // делаем Swiper зацикленным
      slidesPerView: "auto",
      breakpoints: {
        320: {
          spaceBetween: 16,
        },
        480: {
          spaceBetween: 20,
        },
        640: {
          spaceBetween: 24,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      init: true,
    });
  }
});
