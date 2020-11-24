(function () {
  var chartProjectCount = document.getElementById("chart-project-count").getContext("2d");

  new Chart(chartProjectCount, {
    type: "bar",
    data: {
      labels: [
        "Belum proses",
        "Proses penyiapan RC/FS",
        "Sudah terdapat RC",
        "Green Book",
        "Daftar Kegiatan",
        "Implementasi",
        "Selesai",
      ],
      datasets: [
        {
          label: 'Jumlah Proyek',
          data: [17, 35, 25, 17, 22, 10, 10],
          backgroundColor: '#1C3682',
          hoverBackgroundColor: '#F88A28',
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

  var chartProjectValue = document.getElementById("chart-project-value").getContext("2d");

  new Chart(chartProjectValue, {
    type: "bar",
    data: {
      labels: [
        "Belum proses",
        "Proses penyiapan RC/FS",
        "Sudah terdapat RC",
        "Green Book",
        "Daftar Kegiatan",
        "Implementasi",
        "Selesai",
      ],
      datasets: [
        {
          label: 'Jumlah Proyek',
          data: [17, 35, 25, 17, 22, 10, 10],
          backgroundColor: '#1C3682',
          hoverBackgroundColor: '#F88A28',
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
