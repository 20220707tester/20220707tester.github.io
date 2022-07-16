let count = 0;
const count_result = document.querySelector('#count_result');
const animal_picture = document.querySelector('#animal_picture');

function count_up() {
  count++;

  if (count === 1) {
    const scroll_here = document.querySelector('#scroll_here');
    let rect = scroll_here.getBoundingClientRect();
    elemtop = rect.top + window.pageYOffset;
    document.documentElement.scrollTop = elemtop;
  }

  if (count < 100) {
    message = count + '回';
  } else {
    message = 'ゲームにお付き合いいただき本当にありがとうございます。もうこのゲームはやめて、ぜひ良い1日をお過ごしください。'
  }

  animal_picture.src = './images/animal2.jpeg';

  setTimeout("get_it_back()",100);

  count_result.textContent = message;
}

function get_it_back() {
  animal_picture.src = './images/animal1.jpeg';
}