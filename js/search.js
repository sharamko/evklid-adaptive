window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#search-open').addEventListener('click', function () {
    document.querySelector('#search').classList.add('is-active');
    document.querySelector('#search-open').classList.add('btn-search-hide');
  });
  document
    .querySelector('#search-close')
    .addEventListener('click', function () {
      document.querySelector('#search').classList.remove('is-active');
      document
        .querySelector('#search-open')
        .classList.remove('btn-search-hide');
    });
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#burger__menu').classList.add('is-active');
  });
  document
    .querySelector('#burger__close')
    .addEventListener('click', function () {
      document.querySelector('#burger__menu').classList.remove('is-active');
    });
});
