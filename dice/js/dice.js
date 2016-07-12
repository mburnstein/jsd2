// Structure
// ------------------------------------------
var rollButton = document.querySelector('.roll-button');
var firstDie   = document.querySelector('#first-die');
var secondDie  = document.querySelector('#second-die');

// Events
// ------------------------------------------
rollButton.addEventListener('click', rollDice);
  
  function rollDice (){
    var random1 = Math.floor(Math.random() * 6) + 1;
    var random2 = Math.floor(Math.random() * 6) + 1;
    var firstClass='dice-'+ random1;
    var secondClass='dice-'+random2;

    firstDie.className = firstClass;
    secondDie.className = secondClass;
  }



// Event Listeners
// ------------------------------------------


/*
Creating a function named 'rollDice' where every time the user hits the "Roll Dice" button, the 
screen randomly updates the two dice. Use the html and css code included 
in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, named 'random1'*/


  

/* generate a random number between 1 - 6 and store to a variable, named 'random2'*/

/* combine the string 'dice-' and random1 to form the random class for the first die, firstClass*/
// firstClass='dice-'+ random1;
/** combine the string 'dice-' and random2 to form the random class for the second die, secondClass*/
// secondClass='dice-'+random2;
/* update the class of firstDie, using assignment, like firstDie.className =*/
// firstDie.className = firstClass;
/* update the class of secondDie, using assignment, like secondDie.className = */
// secondDie.className = secondClass;
/*3) Check to see if the Dice Roll has been hit, if it has run the rollDice function.*/

