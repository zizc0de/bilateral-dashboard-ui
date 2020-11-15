$(document).ready(function () {
  $("#dataTable")
    .DataTable({
      responsive: true,
      searching: false,
      lengthChange: false,
    })
    .columns.adjust()
    .responsive.recalc();

  
  $("#btn-filter").on('click', function() {
    $("#more-filter").toggle();
    $("#btn-filter").toggleClass('btn-primary', 'btn-default');
    $("#btn-filter > i").toggleClass('fa-chevron-up', 'fa-chevron-down');
  });
});
