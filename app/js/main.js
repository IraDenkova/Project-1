$(function () {

  $('.slider-yoga__items').on('init reInit', function(event, slick) {
    $('.counter').text('0' + 1 + '/' + '0' + slick.slideCount);
  });

  $('.slider-yoga__items').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.counter').text('0' + (currentSlide + 1) + '/' + '0' + slick.slideCount);
  });
  
  $('.slider-yoga__items').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg width="13" height="5" viewBox="0 0 13 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.648 4.95C1.892 4.074 1.1 3.426 0.272 3.006V2.682C1.1 2.262 1.892 1.614 2.648 0.738H3.278C2.918 1.494 2.57 2.07 2.234 2.466H12.728V3.222H2.234C2.57 3.618 2.918 4.194 3.278 4.95H2.648Z" fill="white"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="13" height="5" viewBox="0 0 13 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.722 4.95C10.094 4.182 10.442 3.606 10.766 3.222H0.272V2.466H10.766C10.442 2.082 10.094 1.506 9.722 0.738H10.352C11.108 1.614 11.9 2.262 12.728 2.682V3.006C11.9 3.426 11.108 4.074 10.352 4.95H9.722Z" fill="white"/></svg></button>',
    fade: true,
  });

  $('.templates-slider__inner').slick({
    arrows: false,
    slidesToShow: 3
  });

  $('.questions__item-2').on('click', function () {
    $('.questions__item-p').slideToggle()
  })

  $('.button-currency').on('click', function () {
    $('.button-currency__box').slideToggle()
  })
});