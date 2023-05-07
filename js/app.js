'use strict';

let userName = prompt('Hi there, what is your name?');

if (userName === null || userName === '') {
  alert('You forgot to input your name or you just clicked cancel.');
} else {
  alert(`Thanks for stopping by ${userName} I hope you are well`);
}

let answerCorrect = 0;

function questionOne() {
  let questionOneGuess = prompt('Can you guess if I like pizza? Answer with a yes/no or y/n.').toLowerCase();

  if (questionOneGuess === 'y' || questionOneGuess === 'yes') {
    alert('You are correct');
    answerCorrect++;
  } else if (questionOneGuess === 'n' || questionOneGuess === 'no') {
    alert('bzzzt, incorrect');
  }
}

questionOne();

function questionTwo() {
  let questionTwoGuess = prompt('Does a spider have 12 legs? Answer with a yes/no or y/n.').toLowerCase();

  if (questionTwoGuess === 'y' || questionTwoGuess === 'yes') {
    alert('You are incorrect, they have 8');
  } else if (questionTwoGuess === 'n' || questionTwoGuess === 'no') {
    alert('Thats correct, they have 8 legs.');
    answerCorrect++;
  }
}

questionTwo();

function questionThree() {
  let questionThreeGuess = prompt('Are peanuts in the nut family? Answer with a yes/no or y/n.').toLowerCase();

  if (questionThreeGuess === 'y' || questionThreeGuess === 'yes') {
    alert('You are incorrect, peanuts are legumes like lentils and peas');
  } else if (questionThreeGuess === 'n' || questionThreeGuess === 'no') {

    alert('That is correct, peanuts are legumes like lentils and peas');
    answerCorrect++;
  }

}

questionThree();


function questionfour() {
  let questionFourGuess = prompt('Can emus fly? Answer with a yes/no or y/n.').toLowerCase();

  if (questionFourGuess === 'y' || questionFourGuess === 'yes') {

    alert('You are correct, they can fly!');
    answerCorrect++;
  } else if (questionFourGuess === 'n' || questionFourGuess === 'no') {
    alert('bzzzt, incorrect, they really can fly!');
  }
}
questionfour();

function questionFive() {
  let questionFiveGuess = prompt('Does light travel in a straight line? Answer with a yes/no or y/n.').toLowerCase();

  if (questionFiveGuess === 'y' || questionFiveGuess === 'yes') {
    alert('You are correct, light does travel in a straight line');
    answerCorrect++;
  } else if (questionFiveGuess === 'n' || questionFiveGuess === 'no') {
    alert('bzzzt, incorrect, Light does travel in a straight line');
  }
}

questionFive();

let myNum = 8;
let numberAttempts = 4;
let userGuess;
let correctNumber = false;

alert(`Let's play a game. Guess a number between 1 - 10, you should have ${numberAttempts} attempts.`);

function questionSix() {
  while (correctNumber === false && numberAttempts > 0) {
    userGuess = +prompt(`Guess a number between 1 - 10, you should have ${numberAttempts} attempts.`);
    if (userGuess === myNum) {
      alert(`You got it right! My number is ${myNum}.`);
      correctNumber = true;
      answerCorrect++;
    }
    else if (userGuess > myNum) {
      alert('You guessed too high.');
    }
    else if (userGuess < myNum) {
      alert('You guessed to low.');
    } else {
      alert('invaild guess, guess a number');
    }
    numberAttempts--;
    if (numberAttempts > 0 && !correctNumber) {
      alert('Guess again!!');
    }
  }
  if (correctNumber === false && numberAttempts === 0) {
    alert(`Game Over! the correct number was ${myNum}.`);
  }
}

questionSix();

let favTree = ['pine', 'oak', 'juniper'];

let numTrys = 6;
let userTree;
let foundFavTree = false;

alert(`Let's play another game. Guess my favorite kind of tree, you should have ${numTrys} attempts.`);

function questionSeven() {
  for (let i = 1; i <= numTrys; i++) {
    userTree = prompt(`Whats my favorite tree. you have ${numTrys - i + 1} attempts left.`);
    userTree = userTree.toLowerCase();
    if (favTree.includes(userTree)) {
      alert(`You got it, ${userTree} is one of my favorites.`);
      answerCorrect++;
      foundFavTree = true;
      alert(`The correct answers were ${favTree[0]}, ${favTree[1]}, ${favTree[2]}.`);
      break;
    }
  }

  if (numTrys === 0 || !foundFavTree) {
    alert(`Sorry, you have ran out of trys. The correct answers were ${favTree[0]}, ${favTree[1]}, ${favTree[2]}.`);
  }
}

questionSeven();

alert(`Thanks for answering these questions, ${userName}. Your score is ${answerCorrect} out of the 7. I hope you enjoyed it. `);
