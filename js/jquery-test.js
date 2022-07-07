console.log('jquery-test.jsを読み込みました');


// 構文：ドルマーク=>セレクター=>セレクターで何するか
// イベント=ユーザーの行動

// 書き方1
$('#hogehoge').on('click', function() {
  console.log('クリックされました. ');
})


// 書き方2
// function click_event() {
//   console.log('クリックされました. ');
// }

// $('#hogehoge').on('click', click_event);


// focusイベントを取得する
$('#input-hoge').on('focus', function() {
  console.log('フォーカスされました. ');
})

// jQueryでアニメーション (メソッドはピリオドでつなげることができる！)
// $('#hogehoge').animate({
//   'fontSize': '64px', //ハイフンはキャメルケースに直す必要あり
// }).animate({
//   'fontSize': '16px',
// })


// イベント処理とアニメーションを組み合わせる
$('#hogehoge').on('click', function() {
  console.log('クリックされました. ');

  //中にそのまま入れられる
  $('#hogehoge').animate({
    'fontSize': '64px', //ハイフンはキャメルケースに直す必要あり
  }).animate({
    'fontSize': '16px',
  })
})