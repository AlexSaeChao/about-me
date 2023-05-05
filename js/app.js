'use strict';

console.log('howdy!');

// DONE Ask the user their name through a prompt()

let userName = prompt('Hi there, what is your name?');

// Done Display that name back to the user through a custom greeting welcoming them to your site.

if (userName === null || userName === '') {
  alert('You forgot to input your name or you just clicked cancel.');
} else {
  // console.log(userName);
  alert(`Thanks for stopping by ${userName} I hope you are well`);
}
// Done Display the user’s name back to them in your final message to the user.

let answerCorrect = 0;
// Question 1

function questionOne() {
  let questionOneGuess = prompt('Can you guess if I like pizza? Answer with a yes/no or y/n.').toLowerCase();

  if (questionOneGuess === 'y' || questionOneGuess === 'yes') {
    // console.log('input yes, pizza');
    alert('You are correct');
    answerCorrect++;
  } else if (questionOneGuess === 'n' || questionOneGuess === 'no') {
    // console.log('input no, pizza');
    alert('bzzzt, incorrect');

  }
}

questionOne();

// Question 2
function questionTwo() {
  let questionTwoGuess = prompt('Does a spider have 12 legs? Answer with a yes/no or y/n.').toLowerCase();

  if (questionTwoGuess === 'y' || questionTwoGuess === 'yes') {
    // console.log('input yes, spider');
    alert('You are incorrect, they have 8');
  } else if (questionTwoGuess === 'n' || questionTwoGuess === 'no') {
    // console.log('input no, spider');
    alert('Thats correct, they have 8 legs.');
    answerCorrect++;
  }
}
questionTwo();

// Question 3
function questionThree() {
  let questionThreeGuess = prompt('Are peanuts the nut family? Answer with a yes/no or y/n.').toLowerCase();

  if (questionThreeGuess === 'y' || questionThreeGuess === 'yes') {
    // console.log('input yes, peanuts');
    alert('You are incorrect, peanuts are legumes like lentils and peas');
  } else if (questionThreeGuess === 'n' || questionThreeGuess === 'no') {
    // console.log('input no, peanuts');
    alert('That is correct, peanuts are legumes like lentils and peas');
    answerCorrect++;
  }

}

questionThree();

// Question 4
function questionfour() {
  let questionFourGuess = prompt('Can emus fly? Answer with a yes/no or y/n.').toLowerCase();

  if (questionFourGuess === 'y' || questionFourGuess === 'yes') {
    // console.log('input yes, emu');
    alert('You are correct, they can fly!');
    answerCorrect++;
  } else if (questionFourGuess === 'n' || questionFourGuess === 'no') {
    // console.log('input no, emu');
    alert('bzzzt, incorrect, they really can fly!');
  }
}
questionfour();

// Question 5
function questionFive() {
  let questionFiveGuess = prompt('Does light travel in a straight line? Answer with a yes/no or y/n.').toLowerCase();

  if (questionFiveGuess === 'y' || questionFiveGuess === 'yes') {
    // console.log('input yes, light');
    alert('You are correct, light does travel in a straight line');
    answerCorrect++;
  } else if (questionFiveGuess === 'n' || questionFiveGuess === 'no') {
    // console.log('input no, light');
    alert('bzzzt, incorrect, Light does travel in a straight line');
  }
}

questionFive();


// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

// Question 6
let myNum = 8;
let numberAttempts = 4;
let userGuess;
let correctNumber = false;

// FOR Lab you will have to figure out how to compare a string and a num in your strictly equals world
alert(`Let's play a game. Guess a number between 1 - 10, you should have ${numberAttempts} attempts.`);

function questionSix() {
  while (correctNumber === false && numberAttempts > 0) {
    userGuess = +prompt(`Guess a number between 1 - 10, you should have ${numberAttempts} attempts.`);
    console.log('++++', userGuess);
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

// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Question 7

let favTree = ['pine', 'oak', 'juniper'];
// Give the user 6 attempts to guess the correct answer.
let numTrys = 6;
let userTree;
let foundFavTree = false;

alert(`Let's play another game. Guess my favorite kind of tree, you should have ${numTrys} attempts.`);
// Consider using a loop of some sort for this question.

function questionSeven() {
  for (let i = 1; i <= numTrys; i++) {
    userTree = prompt(`Whats my favorite tree. you have ${numTrys - i + 1} attempts left.`);
    userTree = userTree.toLowerCase();
    if (favTree.includes(userTree)) {
      // The guesses will end once the user guesses a correct answer or they run out of attempts.
      alert(`You got it, ${userTree} is one of my favorites.`);
      answerCorrect++;
      foundFavTree = true;
      break;
    }
  }

  if (numTrys === 0 || !foundFavTree) {
    // Display all the possible correct answers to the user.
    alert(`Sorry, you have ran out of trys. The correct answers were ${favTree[0]}, ${favTree[1]}, ${favTree[2]}.`);
  }
}

questionSeven();

alert(`Thanks for answering these questions, ${userName}. Your score is ${answerCorrect} out of the 7. I hope you enjoyed it.`);
