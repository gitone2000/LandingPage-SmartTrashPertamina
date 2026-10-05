document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.clients-carousel', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            768: {
                slidesPerView: 4
            },
            1024: {
                slidesPerView: 5
            }
        }
    });
});
