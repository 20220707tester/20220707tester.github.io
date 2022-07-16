function seeResult(){
  let point = 0;
  let first_question_elements = document.getElementsByName( "fights" );
  let second_question_elements = document.getElementsByName( "sword-or-guns" );
  let third_question_elements = document.getElementsByName( "power-or-connect" );
  let fourth_question_elements = document.getElementsByName( "light-or-heavy" );
  let fifth_question_elements = document.getElementsByName( "roman-or-win" );

  
  for (let i = 0; i < first_question_elements.length; i++) {
    if ( first_question_elements[i].checked ) {
        point += parseInt(first_question_elements[i].value) ;
      break ;
    }
  }
  for (let i = 0; i < second_question_elements.length; i++) {
    if ( second_question_elements[i].checked ) {
        point += parseInt(second_question_elements[i].value) ;
      break ;
    }
  }
  for (let i = 0; i < third_question_elements.length; i++) {
    if ( third_question_elements[i].checked ) {
        point += parseInt(third_question_elements[i].value) ;
      break ;
    }
  }
  for (let i = 0; i < fourth_question_elements.length; i++) {
    if ( fourth_question_elements[i].checked ) {
        point += parseInt(fourth_question_elements[i].value) ;
      break ;
    }
  }
  for (let i = 0; i < fifth_question_elements.length; i++) {
    if ( fifth_question_elements[i].checked ) {
        point += parseInt(fifth_question_elements[i].value) ;
      break ;
    }
  }
  
  let message;

  console.log(point);

  if ( point === "" ) {
    message = '何も選択されていません';
  } else if (point < -5) {
    message = 'あなたは全くロイに向いていません。残念ながら、射撃ミーやメンメンなどをおすすめします。いやあ、しかし、よく考えてみれば、ロイが向いている気もします。そうですね、ロイをおすすめしましょうか。';
  } else if (point < 0) {
    message = 'あなたはあまりロイに向いていません。残念ながら、マリオやピカチューなどをおすすめします。しかし、よく考えてみれば、ロイが向いている気もします。そうですね、ロイをおすすめしましょうか。';
  } else if (point < 5) {
    message = 'あなたはかなりロイに向いています。まずはロイでVIP部屋を目指しましょう。大丈夫、横スマブンブンしてれば勝てます。';
  } else if (point < 12) {
    message = 'あなたはロイにしか向いていません。ロイ以外は使ってはいけません。ん？ジョーカー？？知らない子ですね。さあ、今日も元気よくスマブラしましょう！！';
  }

  console.log(message);


  // 書き換えたいHTMLの要素を取得する
  // CSSと同じように指定できる id=>#, class=>., htmlタグ=>h1 (idで取ってくるのが通例)
  let p_message = document.querySelector('#p_message');
  p_message.textContent = message;
}