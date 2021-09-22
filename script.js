'use strict';

//DOM manipulation

//get value of element with class ".message"
// console.log(document.querySelector('.message').textContent);

// //set the value of the element with class ".message"
// document.querySelector('.message').textContent = 'you won';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 26;

// console.log((document.querySelector('.guess').value = 25));

// //handle button click:
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.number').textContent = '?';

//game reset
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  //PLAYER WINS
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'you won';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if(score > highscore){
        highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;

    //GUESS IS TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost';
    }

    //GUESS IS TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost';
    }
  }
});
