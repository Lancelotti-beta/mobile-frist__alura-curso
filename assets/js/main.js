import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // }
});
