'use strict';

var game = prompt('Do you want to play a guessing game about me?');
game = game.toLowerCase();
console.log('do they want to play:', game);

if (game === 'yes' || game === 'Yes'){
  console.log('yes they want to play',game)
  // var myName = prompt('Do you know my name?')
  // console.log('do they know my name',myName)
} else {
  console.log('they say no',game)
  alert('To bad you HAVE TO play');
}

  var myName = prompt('Do you know my name?')
  console.log('do they know my name',myName)

if (myName === 'Yes' || myName === 'yes'){
  console.log('they know my name',myName)
  alert('Good for you.');
} else {
  console.log('they dont know',myName)
  alert('Sorry you have met the best person in THE WORLD');
}
