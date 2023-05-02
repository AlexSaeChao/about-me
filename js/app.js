'use strict';

console.log('howdy!');

// DONE Ask the user their name through a prompt()

let userName = prompt('Hi there, what is your name?');

// Done Display that name back to the user through a custom greeting welcoming them to your site.
if (userName === null || userName === ''){
  alert('You forgot to input your name or you just clicked cancel.');
} else {
  // console.log(userName);
  alert(`Thanks for stopping by ${userName} I hope you are well`);
}
// Done Display the user’s name back to them in your final message to the user.


let questionOneGuess = prompt('Can you guess if I like pizza? Answer with a yes/no or y/n.').toLowerCase();

if (questionOneGuess ==='y' || questionOneGuess === 'yes'){
  // console.log('input yes, pizza');
  alert('You are correct');
} else if(questionOneGuess === 'n' || questionOneGuess === 'no'){
  // console.log('input no, pizza');
  alert('bzzzt, incorrect');
}


let questionTwoGuess = prompt('Does a spider have 12 legs? Answer with a yes/no or y/n.').toLowerCase();

if (questionTwoGuess ==='y' || questionTwoGuess === 'yes'){
  // console.log('input yes, spider');
  alert('You are incorrect, they have 8');
} else if(questionTwoGuess === 'n' || questionTwoGuess === 'no'){
  // console.log('input no, spider');
  alert('Thats correct, they have 8 legs.');
}


let questionThreeGuess = prompt('Are peanuts the nut family? Answer with a yes/no or y/n.').toLowerCase();

if (questionThreeGuess ==='y' || questionThreeGuess === 'yes'){
  // console.log('input yes, peanuts');
  alert('You are incorrect, peanuts are legumes like lentils and peas');
} else if(questionThreeGuess === 'n' || questionThreeGuess === 'no'){
  // console.log('input no, peanuts');
  alert('That is correct, peanuts are legumes like lentils and peas');
}


let questionFourGuess = prompt('Can emus fly? Answer with a yes/no or y/n.').toLowerCase();

if (questionFourGuess ==='y' || questionFourGuess === 'yes'){
  // console.log('input yes, emu');
  alert('You are correct, they can fly!');
} else if(questionFourGuess === 'n' || questionFourGuess === 'no'){
  // console.log('input no, emu');
  alert('bzzzt, incorrect, they really can fly!');
}


let questionFiveGuess = prompt('Does light travel in a straight line? Answer with a yes/no or y/n.').toLowerCase();

if (questionFiveGuess ==='y' || questionFiveGuess === 'yes'){
  // console.log('input yes, light');
  alert('You are correct, light does travel in a straight line');
} else if(questionFiveGuess === 'n' || questionFiveGuess === 'no'){
  // console.log('input no, light');
  alert('bzzzt, incorrect, Light does travel in a straight line');
}

alert(`Thanks for answering the yes/no questions, ${userName}.`);
