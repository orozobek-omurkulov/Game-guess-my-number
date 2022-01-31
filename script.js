'use strict';

let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
let score = 20;
let highscore = 0;


const displayMessage = function(message) {
    document.querySelector('.message').textContent =
    message;
} 

function bodyColorChange(body) {
    document.querySelector('body').style.backgroundColor = 
    body
}
function changeNumberWidth(number) {
    document.querySelector('.number').style.width =
    number;
}

document.querySelector('.check').addEventListener
('click', function () {
    const guess = Number( document.querySelector('.guess').value)

    // When there is no input
    if(!guess) {
       displayMessage('No number')

    // when player wins
    } else if(guess === secretNumber) {

        displayMessage('Correct message');

        bodyColorChange('#60b347')

        changeNumberWidth('30rem')

        document.querySelector('.number').textContent = secretNumber;
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


    // When guess is wrong
    } else if(guess !== secretNumber) {
        if(score > 1) {
            displayMessage( guess > secretNumber ? 'too hight' : 'Too low')
            score -= 1
            document.querySelector('.score').textContent = score;
        } else {
           displayMessage('You lost the game') 
            'you lost the game'
            // score -= 1
            document.querySelector('.score').textContent = 0;
        }
    }
})


document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 ) + 1;
    secretNumber = 0;
    displayMessage('Start guessing ...')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';
    changeNumberWidth('15rem')
    document.querySelector('.number').textContent = ''
    bodyColorChange('#222')
    document.querySelector('body').style.backgroundColor = 
    '#222'
    
})