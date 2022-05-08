let burger = document.querySelector('.burger');
let menu = document.querySelector('.modal-nav');
let menuLinks = menu.querySelectorAll('.nav__link');
let burgerClose = menu.querySelectorAll('.burger-close');

burger.addEventListener('click',

  function () {


    menu.classList.toggle('modal-nav--active');

    document.body.classList.toggle('stop-scroll');
  })
menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {


    menu.classList.remove('modal-nav--active');

    document.body.classList.remove('stop-scroll')
  })
})

burgerClose.forEach(function (e) {
  e.addEventListener('click', function () {


    menu.classList.remove('modal-nav--active');

    document.body.classList.remove('stop-scroll')
  })
})