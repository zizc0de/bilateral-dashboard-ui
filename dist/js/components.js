(function () {
  var dropdown = Array.from(document.querySelectorAll('.dropdown-button'));

  dropdown.forEach(function(el) {
    el.addEventListener('click', function() {
      this.parentNode.classList.toggle("open");
    });
  });

  var accordion = Array.from(document.querySelectorAll('.accordion-button'));

  accordion.forEach(function(el) {
    el.addEventListener('click', function() {
      this.parentNode.classList.toggle("open");
    });
  });
})();
