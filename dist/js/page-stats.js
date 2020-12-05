(function () {
  var chartProjectCount = document.getElementById("table-stats").getContext("2d");

  var options = {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

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
          backgroundColor: '#1C3682',
          hoverBackgroundColor: '#F88A28',
          barThickness: 20,
        },
      ],
    },
    options,
  });
})();
