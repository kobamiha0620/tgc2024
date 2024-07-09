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


const youtoo = new Swiper("#swiper02", {
        allowTouchMove: true,
        loop: true, // ループ有効

        slidesPerView: 1,
        navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
        },
});

const foryou = new Swiper("#swiper03", {
        allowTouchMove: true,
        loop: true, // ループ有効
        slidesPerView: 1,
        navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
        }
        
});
const swiper04 = new Swiper("#swiper04", {
        allowTouchMove: true,
        loop: true, // ループ有効
        slidesPerView: 1,
        navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
        },
});