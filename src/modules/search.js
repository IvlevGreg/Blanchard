let searchBtn = document.querySelectorAll('.search-btn-js');
let search = document.querySelector('.search_mb');
let searchSubmit = document.querySelectorAll('.search-submit')
let searchTransform = document.querySelector('.search__form-container')




searchBtn.forEach(function (e) {
  e.addEventListener('click', function () {

    search.classList.toggle('search--active');
    searchTransform.classList.toggle('search__form-container-tr');


  })
})


searchSubmit.forEach(function (el) {
  el.addEventListener('click', function () {

    search.classList.toggle('search--active');

    searchTransform.classList.toggle('search__form-container-tr');

  })
})

