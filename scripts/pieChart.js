const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "United States",
      "Brazil",
      "India",
      "Mexico",
      "Peru",
      "United Kingdom",
    ],
    datasets: [
      {
        label: "Points",
        data: [601824, 501825, 388135, 231187, 190202, 127976],
        backgroundColor: [
          "rgba(255, 99, 132,.9)",
          "rgba(54, 162, 235,.9)",
          "rgba(255, 206, 86,.9)",
          "rgba(75, 192, 192,.9)",
          "rgba(153, 102, 255,.9)",
          "rgba(255, 159, 64,.9)",
        ],
        borderColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
        ],
        borderWidth: 0.2,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
