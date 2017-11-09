'use strict';

var points = 0;
console.log('begining score', points);

function addNumbers () {
  alert('This function is an adding machine. Please Follow Instructions');
  var num1 = parseInt(prompt('Give me a whole number'));
  var num2 = parseInt(prompt('Give me another whole number'));
  console.log('num1',num1);
  console.log('num1',num2);
  alert('Your answer is..........');
  alert(num1 + num2 );
}

addNumbers();

var game = prompt('Do you want to play a guessing game about me?').toLowerCase();
console.log('do they want to play:', game);

if (game === 'yes' || game === 'Yes') {
  console.log('yes they want to play:', game);
} else {
  console.log('they say no', game);
  alert('To bad you HAVE TO play');
}

var myName = prompt('Do you know my name?').toLowerCase();
console.log('do they know  what my name is',myName);

if (myName === 'Yes' || myName === 'yes') {
  console.log('they know my name',myName);
  alert('Good for you.');
  points++;
} else {
  console.log('they dont know',myName);
  alert('Sorry you haven\'t met the best person in THE WORLD.Because if you did you would know my name');
}

var myAge = prompt('Do you know what my age is?').toLowerCase();
console.log('do they know my name');

if(myAge === 'yes' || myAge === 'Yes'){
  console.log('they know my age',myAge);
  alert('HOW I dont even know my age... jk');
  points++;
}else{
  console.log('dont know my age',myAge);
  alert('Well it you count at all your fingers and toes maybe just maybe you\'ll be able to figure it out.');
}

var myBirthday = prompt('Do you know my birthday?').toLowerCase();
console.log('know my birthday',myBirthday);

if(myBirthday === 'Yes' || myBirthday === 'yes'){
  console.log('know my birthday',myBirthday);
  alert('ya its a great day');
  points++;
} else {
  console.log('dont know my birthday',myBirthday);
  alert('Its not that hard to guess there are only 365 days to choose from.');
}

var myFavFood = prompt('Do you know what my favorite food?').toLowerCase();
console.log('know my myFavFood',myFavFood);

if(myFavFood === 'Yes' || myFavFood === 'yes'){
  console.log('know what my myFavFood is',myFavFood);
  alert('Pizza is the best food');
  points++;
} else {
  console.log('dont know my myFavFood is',myFavFood);
  alert('You should know because it is the best food there is.');
}

var favMovie = prompt('Do you know what my favorite movie is?').toLowerCase();
console.log('my fav movie',favMovie);

if(favMovie === 'yes' || favMovie === 'Yes'){
  console.log('know my fav movie',favMovie);
  alert('Wow how did you know is was Gangs of New york.');
  points++;
} else {
  console.log('dont know my favMovie',favMovie);
  alert('you dont know thats fine it changes all the time.');
}

var theNumber = Math.round(Math.random()*15);

var x = 4;
var counter = false;
console.log('Counter: ', counter);

while(x > 0) {
  var guessedNum = parseInt(prompt('Guess what number I am thinking of between 1 and 15.'));
  console.log('guessed number', guessedNum);
  if(guessedNum === theNumber) {
    alert('Wow, you guessed it.');
    points++;
    counter = true;
    break;
  } else if(guessedNum < theNumber){
    alert('Too low. '+(x - 1)+' tries left.');
  } else if(guessedNum > theNumber){
    alert('Too high. '+(x - 1)+' tries left.');
  } else {
    console.log('your if statement broke');
  }
  x--;
}
