const swiper = new Swiper(".audition", {
        allowTouchMove: false,
        autoplay: {
                delay: 0, // 途切れなくループ   
                disableOnInteraction: true,
                pauseOnMouseEnter: false,
        },
        loop: true, // ループ有効
        slidesPerView: 2,
        speed: 3000,


        breakpoints: {

                768: {
                        speed: 6000,

                },
        }
});


const swiper02 = new Swiper ("#swiper02", {
        effect: 'slide',
        allowTouchMove: true,
        loop: true, // ループ有効

        slidesPerView: 1,
        navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
        }
});

const swiper03 = new Swiper ("#swiper03", {
        effect: 'slide',

        allowTouchMove: true,
        loop: true, // ループ有効
        slidesPerView: 1,
        navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
        }
        
});
const swiper04 = new Swiper ("#swiper04", {
        effect: 'slide',

        allowTouchMove: true,
        loop: true, // ループ有効
        slidesPerView: 1,
        navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
        }
});