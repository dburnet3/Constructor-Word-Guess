var Word = require("./Word.js");
var inquirer = require("inquirer");

var letterArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

var tvShows = ["Friends", "Frasier", "House", "The Bachelor"]; 

var rand = Math.floor(Math.random() * tvShows.length);//randomizing the tvShows array
var randWord = tvShows[rand];

gameWord = new Word(randWord);

var freshWord = false;

var incorrectLetters = [];//array for wrong guesses
var correctLetters = [];//array for correct guess

var guessesLeft = 10;//# of guesses remaining

function information() {
    if (freshWord) {
        var rand = Math.floor(Math.random() * tvShows.length);
        var randWord = tvShows[rand];

        gameWord = new Word(randWord);
        
        freshWord = false;
    }

    var finishedWord = [];
    gameWord.newArray.forEach(completeCheck);

    if (finishedWord.includes(false)) {
    inquirer
    .prompt([
                {
                    type: "input",
                    message: "Please guess a letter between A-Z",
                    name: "userinput"
                }
            ])
            .then(function (input) {
                if (!letterArray.includes(input.userinput) || input.userinput.length > 1) {
                    console.log("Nope, try again!");
                    information();
                } else {

                   
                    if (incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === "") {
                        console.log("You've already guessed that already");
                        information();
                    } else {

                        var confirmWord = [];

                        gameWord.userGuess(input.userinput);

                        gameWord.newArray.forEach(wordCheck);
                        if (confirmWord.join('') === finishedWord.join('')) {
                            console.log("Incorrect");
                           
                            incorrectLetters.push(input.userinput);
                            guessesLeft--;
                        } else {
                            console.log("Correct!");
                           
                            correctLetters.push(input.userinput);
                        }

                        gameWord.log();

                        console.log("# Guesses Left: " + guessesLeft);
                        console.log("Letters Guessed: " + incorrectLetters.join(" "));

                        if (guessesLeft > 0) {
                            information();
                        } 
                        
                        function wordCheck(key) {
                            confirmWord.push(key.guessed);
                        }
                    }
                }
            })
    } else {
        console.log("YOU WIN!!!!!!!!!!");

    }

   
    function completeCheck(key) {
        finishedWord.push(key.guessed);
    }
}


information();

