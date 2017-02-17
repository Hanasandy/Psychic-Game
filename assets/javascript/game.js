// Assigning an array to choose from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// variables used 
var wins = 0;
var losses = 0;
var guessesLeft = 8;
var user_guessed = [];
var computerGuess = "";
var userGuess = "";

//console.log("~~~~~~~~~~ New Game ~~~~~~~~~~");
computerGuess = letters[Math.floor(Math.random() * letters.length)];   
       console.log("Computer guess : " + computerGuess);

// //start game when user click on the button "Try it!"
// document.getElementById("gameStart").onclick = function() {
//     buttons()
// }

//user inputs his/her guess
document.onkeyup = function(event) {
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
       console.log("User guess : " + userGuess);

//show score on the screen
    console.log("Losses : " + losses);
    document.getElementById("loses").innerHTML = losses;
    console.log("Guesses left : " + guessesLeft);
    document.getElementById("guesses").innerHTML = guessesLeft;

//show user guessed letters on the screen 
        user_guessed.push(" " + userGuess);
        document.getElementById("userguessed").innerHTML = user_guessed;

//judge win/loose
    if (userGuess == computerGuess) {

        wins++;
        console.log("Wins : " + wins);
        
        document.getElementById("wins").innerHTML = wins;
        alert("Are you psychic? You guessed right!!!");

        //reset the game
        // guessesLeft = 9
        console.log("~~~~~~~~~~~~ NEW GAME ~~~~~~~~~~");
        
        //restart the game by setting the variables to initial state
        user_guessed = [];
        //computerGuess = letters[Math.floor(Math.random() * letters.length)];
        //console.log("Computer Guessed : " + computerGuess);

    } 
    //if userguess !== computer guess
    else {
        //decrease Guess left counter
        guessesLeft--;   

        if (guessesLeft === -1) {
            alert("No more guesses left!");
            //increase Losses counter if chances = zero
            losses++;                   
            guessesLeft = 8;

            console.log("~~~~~~~~~~NEW GAME~~~~~~~~~~");
            computerGuess = letters[Math.floor(Math.random() * letters.length)];
            user_guessed = [];

            console.log("Computer guessed : " + computerGuess);
        }

        
    }

    

}