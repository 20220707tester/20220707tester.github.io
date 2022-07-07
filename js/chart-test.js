console.log('chart-test.jsを読み込みました');

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
];

//データ
const data = {
  labels: labels,
  datasets: [{
    label: 'Sells of new books',
    backgroundColor: 'rgb(100, 99, 132)',
    borderColor: 'rgb(100, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 15],
  },
  // 間まで区切ってデータを増やしてみる
  {
    label: 'Sells of second-hand books',
    backgroundColor: 'rgb(300, 99, 132)',
    borderColor: 'rgb(300, 99, 132)',
    data: [0, 20, 52, 2, 50, 20, 45],
  }
  ]
};

// コンフィグ
const config = {
  type: 'line',
  data: data,
  options: {}
};

// グラフをcanvasタグに描写する（ID名で場所指定）
const myChart = new Chart(
  // document.getElementById('myChart'),
  // 上の処理をjQueryを使ってかくと
  $('#myChart'),
  config
);


// ドーナツグラフ
const data2 = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};
// コンフィグ
const config2 = {
  type: 'doughnut',
  data: data2,
};
// グラフを描画する
const myChart2 = new Chart(
  // document.getElementById('myChart'),
  // 上の処理をjQueryを使ってかくと
  $('#myChart2'),
  config2
);