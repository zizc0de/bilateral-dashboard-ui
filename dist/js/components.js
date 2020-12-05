(function () {
  // function hideAnotherDropdown() {
  //   var anotherDropdown = document.querySelectorAll(".dropdown.open");

  //   [].forEach.call(anotherDropdown, function (elem) {
  //     elem.classList.remove("open");
  //   });
  // }
  
  // Dropdown
  var dropdown = Array.from(document.querySelectorAll(".dropdown-button"));

  dropdown.forEach(function (el) {
    el.addEventListener("click", function () {
      // Hide another dropdown
      // hideAnotherDropdown();

      this.parentNode.classList.toggle("open");
    });
  });

  // Accordion
  var accordion = Array.from(document.querySelectorAll(".accordion-button"));

  accordion.forEach(function (el) {
    el.addEventListener("click", function () {
      this.parentNode.classList.toggle("open");
    });
  });

  let modal = null;

  $(".btn-modal").on("click", function (e) {
    let modalId = $(this).attr("data-target");
    modal = document.getElementById(modalId);

    modal.style.display = "block";
  });

  $(".modal-close").on("click", function (el) {
    modal.style.display = "none";
  });

  window.onclick = function (event) {
    if (modal && event.target == modal) {
      modal.style.display = "none";
    }
  };
})();
