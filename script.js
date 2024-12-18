new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ],
    datasets: [
      {
        label: '2022',
        backgroundColor: '#4285F4', // Warna biru
        data: [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 5945]
      },
      {
        label: '2023',
        backgroundColor: '#EA4335', // Warna merah
        data: [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689]
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Laporan Penjualan 2022 vs 2023',
        font: { size: 18 }
      },
      legend: {
        position: 'top'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Bulan'
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Jumlah Penjualan'
        },
        ticks: {
          stepSize: 2000
        }
      }
    }
  }
});
