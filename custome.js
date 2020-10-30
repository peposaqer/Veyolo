var swiper = new Swiper(".swiper-1", {
  slidesPerView: 4,
  centeredSlides: true,
  centeredSlidesBounds: true,
  spaceBetween: 15,
  //   cssMode: true,
  navigation: {
    nextEl: ".button .img-2",
    prevEl: ".button .img-1",
  },
  breakpoints: {
    // when window width is >= 320px
    1: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    426: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    769: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  //   mousewheel: true,
  //   keyboard: true,
  // grabCursor: true,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
});

var swiper = new Swiper(".swiper-2", {
  slidesPerView: 2,
  // centeredSlides: true,
  // centeredSlidesBounds: true,
  spaceBetween: 15,
  //   cssMode: true,
  navigation: {
    nextEl: ".buttom .img-4",
    prevEl: ".buttom .img-3",
  },
  breakpoints: {
    // when window width is >= 320px
    1: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    426: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    769: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  //   mousewheel: true,
  //   keyboard: true,
  // grabCursor: true,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
});
