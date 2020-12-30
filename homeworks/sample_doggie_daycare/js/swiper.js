const slider = new Swiper('.slider_gallery', {
    lazy: {
        loadPrevNext: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    grabCursor: true
});
const slider_services = new Swiper('.slider_services', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true,
    grabCursor: true
});