//create an array of choices for the computer to pick from//
var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// create a variable that will track the win, losses, and the guesses that are left//
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var computerGuess = [];
var lettersGuessed = [];

// create a function to generate random letters
window.onload = function() {
  var compGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  computerGuess.push(compGuess);
  console.log(computerGuess[0]);
};

//the game will start when a key is pushed on
document.onkeyup = function(event) {
  var playerGuess = event.key;
  lettersGuessed.push(playerGuess);
  console.log(computerGuess[0]);

  if (playerGuess === computerGuess[0] && guessesLeft > 0) {
    wins++;
    guessesLeft = 9;
    lettersGuessed.length = 0;
    computerGuess.length = 0;
    var compGuess =
      computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(compGuess);
    console.log(computerGuess[0]);
  } else if (playerGuess !== computerGuess[0] && guessesLeft > 0) {
    guessesLeft = guessesLeft - 1;
  } else {
    losses++;
    guessesLeft = 9;
    lettersGuessed.length = 0;
    computerGuess.length = 0;
    var compGuess =
      computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(compGuess);
    console.log(computerGuess[0]);
  }
  var info =
    "<p> Guess what letter I'm thinking of</p>" +
    "<p>Wins:" +
    wins +
    "</p>" +
    "<p>Losses: " +
    losses +
    "</p>" +
    "<p>Guesses left: " +
    guessesLeft +
    "</p>" +
    "<p> Your guesses so far: " +
    lettersGuessed +
    "</p>";

  document.querySelector("#the_game").innerHTML = info;
};
