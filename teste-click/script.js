var modalLink = document.querySelector('.modal-link');
var modal = document.querySelector('.modal');
var modalClose = document.querySelector('.modal-close');

modalLink.addEventListener('click', function(event) {
  event.preventDefault();
  modal.style.display = 'block';
  console.log("Oi");
});

modalClose.addEventListener('click', function(event) {
  event.preventDefault();
  modal.style.display = 'none';
});
