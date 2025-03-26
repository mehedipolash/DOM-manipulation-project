document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('blog-page')
    ?.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.href = 'information.html';
    });

  document
    .getElementById('index-page')
    ?.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.href = 'index.html';
    });
});
