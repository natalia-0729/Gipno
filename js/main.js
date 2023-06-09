$(function(){

  //плавный скролл
  $('.menu, a[href*="#"]').on('click', function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
    return false;
  });

  //открытие мобильного меню
  $('.menu__burger, .menu a').on('click', function(){
    $('.menu__mobile').toggleClass('menu__mobile--active')
  
  });
  //бургер меню - смена полосок на крестик
  $('.menu__burger').click(function(){
    $(this).toggleClass('open');
  });

  //E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

  
  $('.comments__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="comments__slick-prev"><img src="images/arrow_left.svg" alt="cтрелка влево"></button>',
    nextArrow: '<button type="button" class="comments__slick-next"><img src="images/arrow_right.svg" alt="cтрелка вправо"></button>',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1

    });

    $('.feedback__inner').slick({
      dots: true,
      prevArrow: '<button type="button" class="feedback__slick-prev"><img src="images/arrow_left.svg" alt="cтрелка влево"></button>',
      nextArrow: '<button type="button" class="feedback__slick-next"><img src="images/arrow_right.svg" alt="cтрелка вправо"></button>',
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
    prevArrow: '<button type="button" class="diplom__slick-prev"><img src="images/arrow_left.svg" alt="cтрелка влево"></button>',
    nextArrow: '<button type="button" class="diplom__slick-next"><img src="images/arrow_right.svg" alt="cтрелка вправо"></button>',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
}


//модальное окно
const buttonElems = document. querySelectorAll('.button');
const modalElem = document. querySelector('.modal');

modalElem.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms ease-in-out;
`;

const closeModal = event => {
  const target = event.target;
  if (target === modalElem || target.closest('.modal__close')) {
    modalElem.style.opacity = 0;

    setTimeout(() => {
      modalElem.style.visibility = 'hidden';
    }, 300)
  } 
}

const openModal = () => {
  modalElem.style.visibility = 'visible';
  modalElem.style.opacity = 1;
};

buttonElems.forEach(btn =>{
  btn.addEventListener('click', openModal);
});
modalElem.addEventListener('click', closeModal);



//Автоувеличение textarea
const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e =>{
  textarea.style.height = "5px";
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
});