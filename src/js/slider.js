$('.slider-single').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  // adaptiveHeight: true,
  infinite: false,
  useTransform: true,
  speed: 400,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav')
  .on('init', function (event, slick) {
    $('.slider-nav .slick-slide.slick-current').addClass('is-active');
  })
  .slick({
    slidesToShow: 7,
    slidesToScroll: 7,
    dots: false,
    focusOnSelect: false,
    infinite: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });

$('.slider-single').on('afterChange', function (event, slick, currentSlide) {
  $('.slider-nav').slick('slickGoTo', currentSlide);
  var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
  $('.slider-nav .slick-slide.is-active').removeClass('is-active');
  $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function (event) {
  event.preventDefault();
  var goToSingleSlide = $(this).data('slick-index');

  $('.slider-single').slick('slickGoTo', goToSingleSlide);
});

const checkbox1 = document.querySelector('#post-1');
const checkbox2 = document.querySelector('#post-2');
const checkbox3 = document.querySelector('#post-3');
const checkbox4 = document.querySelector('#post-4');
const checkbox5 = document.querySelector('#post-5');
const checkbox6 = document.querySelector('#post-6');
const checkbox7 = document.querySelector('#post-7');
const section = document.querySelector('[data-section]');
let k = 0;

section.addEventListener('click', checkboxDisable);

function checkboxDisable() {
  if (k == 1) {
    checkbox1.checked = false;
    checkbox2.checked = false;
    checkbox3.checked = false;
    checkbox4.checked = false;
    checkbox5.checked = false;
    checkbox6.checked = false;
    checkbox7.checked = false;
    k = 0;
  }
  if (checkbox1.checked == true) {
    k = k + 1;
  }
  if (checkbox2.checked == true) {
    k = k + 1;
  }
  if (checkbox3.checked == true) {
    k = k + 1;
  }
  if (checkbox4.checked == true) {
    k = k + 1;
  }
  if (checkbox5.checked == true) {
    k = k + 1;
  }
  if (checkbox6.checked == true) {
    k = k + 1;
  }
  if (checkbox7.checked == true) {
    k = k + 1;
  }
}
