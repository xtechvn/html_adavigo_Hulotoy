const swiperBanner = new Swiper('.swiper-banner', {
    loop: true,
    pagination: {
        el: '.swiper-banner .swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-banner .swiper-button-next',
        prevEl: '.swiper-banner .swiper-button-prev',
    },

});
const swiperADS = new Swiper('.banner-ads', {
    loop: false,
    pagination: false,
    navigation: false,
    slidesPerView: 1.5,
    spaceBetween: 25,
    breakpoints: {
        540: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2.5,
        },
        992: {
            slidesPerView: 3,
        }
    }
});
const swiperCAT = new Swiper('.category-slide', {
    loop: false,
    pagination: false,
    navigation: false,
    spaceBetween: 15,
    slidesPerView: 2.5,
    breakpoints: {
        540: {
            slidesPerView: 2.5,
        },
        640: {
            slidesPerView: 3.5,
        },
        768: {
            slidesPerView: 4.5,
        },
        1024: {
            slidesPerView: 5.5,
        },
        1400: {
            slidesPerView: 7.5,
        },
        1680: {
            slidesPerView: 9,
        },
    }
});

const swiperFlash = new Swiper('.section-flashsale .product-slide', {
    loop: false,
    pagination: false,
    navigation: false,
    spaceBetween: 15,
    slidesPerView: 1.5,
    breakpoints: {
        540: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 3.5,
        },
        1024: {
            slidesPerView: 4.5,
        },
        1400: {
            slidesPerView: 5.5,
        },
        1680: {
            slidesPerView: 6,
        },
    }
});
$(function () {
    $('.btn-filter').on('click', function () {
        $('#productList').addClass('show-filter');
    });
    $('#closeFilter').on('click', function () {
        $('#productList').removeClass('show-filter');
    });
});