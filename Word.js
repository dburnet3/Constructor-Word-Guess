var Letter = require("./letter.js");

function Word(answer) {
    this.newArray = [];// An array of new Letter objects representing the letters of the underlying word
    
    for (var i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        this.newArray.push(letter);
    }
    
    this.log = function () { //A function that returns a string representing the word
        outputAnswer = "";
        for (var i = 0; i < this.newArray.length; i++) {
            outputAnswer += this.newArray[i] + " ";
        }
        console.log(outputAnswer);
    }
    
    this.userGuess = function (input) {// A function that takes a character as an argument and calls the guess function on each letter object 
        for (var i = 0; i < this.newArray.length; i++) {
            this.newArray[i].guess(input);
        }
    }
}

module.exports = Word;
