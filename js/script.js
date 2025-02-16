document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".slider-main-block", {
        loop: true,
        autoplay: {
            delay: 3500, // Автоперемикання кожні 3 секунди
        },
    });
});
