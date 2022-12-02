const searchBtn = document.querySelectorAll('.search-btn-js');
const search = document.querySelector('.search_mb');
const searchSubmit = document.querySelectorAll('.search-submit');
const searchTransform = document.querySelector('.search__form-container');
const searchForm = document.querySelector('.search__form');

searchBtn.forEach(function (e) {
  e.addEventListener('click', function () {
    search.classList.toggle('search--active');
    searchTransform.classList.toggle('search__form-container-tr');
  });
});

searchSubmit.forEach(function (el) {
  el.addEventListener('click', function () {
    search.classList.toggle('search--active');

    searchTransform.classList.toggle('search__form-container-tr');
  });
});

searchForm.addEventListener('click', (e) => {
  e.preventDefault();
});
