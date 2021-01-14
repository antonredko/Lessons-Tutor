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
    lazy: {
        loadPrevNext: true,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    },
    loop: true,
    grabCursor: true
});