$(function(){

  $('.menu, a[href*="#"]').on('click', function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
    return false;
  });

  
  $('.comments__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow_left.svg" alt="cтрелка влево"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow_right.svg" alt="cтрелка вправо"></button>',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1

    });

    $('.feedback__inner').slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow_left.svg" alt="cтрелка влево"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/arrow_right.svg" alt="cтрелка вправо"></button>',
      infinite: true,
      adaptiveHeight: true,
      slidesToShow: 3,
      slidesToScroll: 3,

      responsive: [
        {
          breakpoint: 951,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 588,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      });
});


if (window.matchMedia('(max-width: 950px)').matches){
  $('.diplom__items').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
}

$(function(){
$('.menu__burger, .menu a').on('click', function(){
  $('.menu__mobile').toggleClass('menu__mobile--active')
});
});