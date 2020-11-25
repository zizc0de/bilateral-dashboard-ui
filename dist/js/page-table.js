$(document).ready(function () {
  $("#dataTable")
    .DataTable({
      responsive: true,
      columnDefs: [
        { responsivePriority: 1, targets: 0 },
        { responsivePriority: 2, targets: -1 },
      ],
      searching: false,
      lengthChange: false,
    })
    .columns.adjust()
    .responsive.recalc();

  $("#btn-filter").on("click", function () {
    $("#more-filter").toggle();
    $("#btn-filter").toggleClass("btn-primary", "btn-default");
    $("#btn-filter > i").toggleClass("fa-chevron-up", "fa-chevron-down");
  });
});
