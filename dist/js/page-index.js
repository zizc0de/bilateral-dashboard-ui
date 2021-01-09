(function () {
  var chartProjectCount = document
    .getElementById("chart-project-count")
    .getContext("2d");

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
        "Blue Book",
        "Daftar Kegiatan",
        "Green Book",
        "RC/FS",
        "Implementasi",
        "Selesai",
      ],
      datasets: [
        {
          data: [17, 35, 25, 17, 22, 10, 10],
          backgroundColor: [
            '#1C3682',
            '#247402',
            '#58B431',
            '#A1DC88',
            '#BF5F1C',
            '#EC4545',
          ],
          barThickness: 20,
        },
      ],
    },
    options,
  });

  var chartProjectValue = document
    .getElementById("chart-project-value")
    .getContext("2d");

  new Chart(chartProjectValue, {
    type: "bar",
    data: {
      labels: [
        "Blue Book",
        "Daftar Kegiatan",
        "Green Book",
        "RC/FS",
        "Implementasi",
        "Selesai",
      ],
      datasets: [
        {
          label: "Jumlah Proyek",
          data: [17, 35, 25, 17, 22, 10, 10],
          backgroundColor: [
            '#1C3682',
            '#247402',
            '#58B431',
            '#A1DC88',
            '#BF5F1C',
            '#EC4545',
          ],
          barThickness: 20,
        },
      ],
    },
    options,
  });
})();
