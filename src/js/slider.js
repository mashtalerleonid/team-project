const windowInnerWidth = window.innerWidth;
if (windowInnerWidth > 768) {
  $(document).ready(function () {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
    });
  });
} else if (windowInnerWidth < 380) {
  $(document).ready(function () {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      arrows: true,
      dots: false,
      centerMode: true,
      focusOnSelect: true,
    });
  });
} else {
  $(document).ready(function () {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      arrows: true,
      dots: false,
      centerMode: true,
      focusOnSelect: true,
    });
  });
}

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
