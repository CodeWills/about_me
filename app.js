'use strict';

var game = prompt('Do you want to play a guessing game about me?');
  game = game.toLowerCase();
  console.log('do they want to play:', game);

if (game === 'yes' || game === 'Yes'){
  console.log('yes they want to play',game);
} else {
  console.log('they say no',game)
  alert('To bad you HAVE TO play');
}

var myName = prompt('Do you know my name?');
  myName = myName.toLowerCase();
  console.log('do they know  what my name is',myName);

if (myName === 'Yes' || myName === 'yes'){
  console.log('they know my name',myName)
  alert('Good for you.');
} else {
  console.log('they dont know',myName)
  alert('Sorry you haven\'t met the best person in THE WORLD.Because if you did you would know my name');
}

var myAge = prompt('Do you know what my age is?');
  myAge = myAge.toLowerCase();
  console.log('do they know my name');

if(myAge === 'yes' || myAge === 'Yes'){
  console.log('they know my age',myAge)
  alert('HOW I dont even know my age... jk');
}else{
  console.log('dont know my age',myAge);
  alert('well it you count at all your fingers and toes maybe just maybe you\'ll be able to figure it out.')
}

  var myBirthday = prompt('Do you know my birthday?');
    myBirthday = myBirthday.toLowerCase();
    console.log('know my birthday',myBirthday)

  if(myBirthday === 'Yes' || myBirthday === 'yes'){
    console.log('know my birthday',myBirthday)
    alert('ya its a great day');
  } else {
    console.log('dont know my birthday',myBirthday)
    alert('Its not that hard to guess there are only 365 days to choose from.');
  }

  var myFavFood = prompt('Do you know what my favorite food?');
    myFavFood = myFavFood.toLowerCase();
    console.log('know my myFavFood',myFavFood)

  if(myFavFood === 'Yes' || myFavFood === 'yes'){
    console.log('know what my myFavFood is',myFavFood)
    alert('Pizza is the best food ');
  } else {
    console.log('dont know my myFavFood is',myFavFood)
    alert('You should know because it is the best food there is.');
  }

    var favMovie = prompt('Do you know what my favorite movie is?');
      favMovie = favMovie.toLowerCase();
      console.log('my fav movie',favMovie)

      if(favMovie === 'yes' || favMovie === 'Yes'){
        console.log('know my fav movie',favMovie)
        alert('Wow how did you know is was Gangs of New york.');
      } else {
        console.log('dont know my favMovie',favMovie)
        alert('you dont know thats fine it changes all the time.');
      }
