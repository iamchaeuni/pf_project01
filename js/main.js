$(function () {


    //topBanner
    $('.topBanner i').on('click', function () {
        $('.topBanner').addClass('on')
    });

    //mainSlide
    $('.mainSlide').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        prevArrow: false,
        nextArrow: false,
    });

    $('.mainSlide').on('afterChange', function (e, s, c) {
        $('.main_dots li').eq(c).addClass('on')
            .siblings().removeClass('on');
        $('.mainVisual .main_num').text(c + 1)
    });

    $('.main_dots li').on('click', function () {
        var idx = $(this).index();
        $('.mainSlide').slick('slickGoTo', idx)
    })

    $('.accessory_slide').slick({
        arrows: false,
        dots: false,
        slidesToShow: 4,
    })

    $('.mainProduct .arrows .prev').on('click', function () {
        $('.accessory_slide').slick('slickPrev');

    })

    $('.mainProduct .arrows .next').on('click', function () {
        $('.accessory_slide').slick('slickNext')
    })
})