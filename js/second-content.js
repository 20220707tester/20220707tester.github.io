// 変数の宣言
let computer_hands = ['グー', 'チョキ', 'パー'];
const div_my_hand = document.querySelector('#my_hand');
const div_computer_hand = document.querySelector('#computer_hand');

function play(my_hand) {
  let result = '';

  // 1: コンピュータがランダムで手を決める

  let computer_hand = computer_hands[Math.floor(Math.random() * computer_hands.length)];
  console.log('コンピューターの手は：' + computer_hand);
  console.log('あなたの手は：' + my_hand);


  // 2: 自分の手とコンピュータの手を比較して勝ち負けを決める

  if (my_hand === 'グー') {

    // ぐー
    div_my_hand.innerHTML = '<img src="./images/janken_gu.png" alt="goo">';

    if (computer_hand === 'グー') {

      // ぐー
      div_computer_hand.innerHTML = '<img src="./images/janken_gu.png" alt="goo">';

      result = 'あいこ！';
    } else if (computer_hand === 'チョキ') {

      // チョキ
      div_computer_hand.innerHTML = '<img src="./images/janken_choki.png" alt="goo">';
      
      result = 'あなたの勝ち！';
    } else if (computer_hand === 'パー') {

      //パー
      div_computer_hand.innerHTML = '<img src="./images/janken_pa.png" alt="goo">';

      result = 'あなたの負け！';
    } else {

      result = 'ジャンケンになっていません！';
    }
  } else if (my_hand === 'チョキ') {

    // チョキ
    div_my_hand.innerHTML = '<img src="./images/janken_choki.png" alt="goo">';

    if (computer_hand === 'グー') {

      // ぐー
      div_computer_hand.innerHTML = '<img src="./images/janken_gu.png" alt="goo">';

      result = 'あなたの負け！';
    } else if (computer_hand === 'チョキ') {

      // チョキ
      div_computer_hand.innerHTML = '<img src="./images/janken_choki.png" alt="goo">';

      result = 'あいこ！';
    } else if (computer_hand === 'パー') {

      //パー
      div_computer_hand.innerHTML = '<img src="./images/janken_pa.png" alt="goo">';

      result = 'あなたの勝ち！';
    } else {
      result = 'ジャンケンになっていません！';
    }
  } else if (my_hand === 'パー') {

    // パー
    div_my_hand.innerHTML = '<img src="./images/janken_pa.png" alt="goo">';

    if (computer_hand === 'グー') {
      
      // ぐー
      div_computer_hand.innerHTML = '<img src="./images/janken_gu.png" alt="goo">';

      result = 'あなたの勝ち！';
    } else if (computer_hand === 'チョキ') {

      // チョキ
      div_computer_hand.innerHTML = '<img src="./images/janken_choki.png" alt="goo">';

      result = 'あなたの負け！';
    } else if (computer_hand === 'パー') {

      //パー
      div_computer_hand.innerHTML = '<img src="./images/janken_pa.png" alt="goo">';

      result = 'あいこ！';
    } else {
      result = 'ジャンケンになっていません！';
    }
  }

  // 3: 勝ち負けにしたがってHTMLを出

  const p_result = document.querySelector('#result');
  p_result.textContent = result;

  const scroll_here = document.querySelector('#scroll_here');
  let rect = scroll_here.getBoundingClientRect();
  elemtop = rect.top + window.pageYOffset;
  document.documentElement.scrollTop = elemtop;

  return result;
}