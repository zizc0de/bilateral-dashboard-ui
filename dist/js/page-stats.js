(function () {
  var chartProjectCount = document.getElementById("table-stats").getContext("2d");

  new Chart(chartProjectCount, {
    type: "bar",
    data: {
      labels: [
        "AFD",
        "IDB",
        "Bank Dunia",
        "Jerman (KfW)",
        "JICA",
        "AFD",
        "IDB",
        "Bank Dunia",
        "Jerman (KfW)",
        "JICA",
        "AFD",
        "IDB",
        "Bank Dunia",
        "Jerman (KfW)",
        "JICA",
        "AFD",
        "IDB",
      ],
      datasets: [
        {
          label: 'Jumlah Proyek',
          data: [17, 35, 25, 17, 22, 17, 35, 25, 17, 23, 17, 35, 25, 17, 23, 25, 17],
          backgroundColor: [
            "#1C3682",
            "#F88A28",
            "#1C3682",
            "#1C3682",
            "#1C3682",
            "#1C3682",
            "#1C3682",
            "#1C3682",
            "#1C3682",
            "#1C3682",
            "#1C3682",
            "#1C3682",
            "#1C3682",
            "#1C3682",
            "#1C3682",
            "#1C3682",
            "#1C3682",
          ],
          barThickness: 20,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
})();
