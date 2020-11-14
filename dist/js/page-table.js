$(document).ready(function () {
  $("#dataTable")
    .DataTable({
      responsive: true,
      searching: false,
      lengthChange: false,
    })
    .columns.adjust()
    .responsive.recalc();
});
