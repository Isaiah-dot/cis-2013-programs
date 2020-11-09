/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

// Variables
var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/

// Checks  if first number is less than 0 and is a number
intMin = parseInt(prompt("Choose the lower number in the range. It must be at least zero."));
while(intMin < 0 || isNaN(intMin))
{
    intMin = parseInt(prompt("Invalid number!! Try again."));
}





/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/

// Checks if the second number is higher than or = to 2 and is a number
intMax = parseInt(prompt("Choose the higher number in the range. It must be at least 2 more than zero"));
while(intMax <= 2 || isNaN(intMax) )
      {
        intMax = parseInt(prompt("Invalid number!! Try again."));
      }







/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */

//Sets the random number generator 
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// set the loop counter
//counter for the mount of guess
intCount = 1;


/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/

//Checks for the guess and make sures it is a number
intGuess = parseInt(prompt("Enter your Guess"));
while(intGuess > intMax || intGuess < intMin)
{
    intGuess = parseInt(prompt("Invalid number!! Try again."));

}




/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */

// While statment to check if the guess is under or higher than the random number chose 
 while ( intGuess != intRandom)
 {
    if ( intGuess < intRandom )
    {
        intGuess = parseInt(prompt("Your guess is to low"));
    }
    else
    {
        intGuess = parseInt(prompt("Your guess is to high"));
    }
  
  intGuess = parseInt(prompt("Choose a new number to guess"));
  
    intCount = intCount + 1;
 }
 
 
 
 
 
 
 

// provides final output upon successful guessing

// The ending message after getting the number guess right
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");
