$(document).ready(function () {
  let table = $("#dataTable")
    .DataTable({
      scrollX: true,
      searching: false,
      lengthChange: false,
    })
    .columns.adjust()
    .responsive.recalc();

  $("#btn-filter").on("click", function () {
    $("#more-filter").toggleClass("hidden", "");
    $("#btn-filter").toggleClass("btn-primary", "btn-default");
    $("#btn-filter > i").toggleClass("fa-chevron-up", "fa-chevron-down");
  });

  $(".data-toggle").on("click", function (e) {
    // Get the column API object
    let column = table.column($(this).attr("data-column"));

    // Toggle the visibility
    column.visible(!column.visible());
  });
});
