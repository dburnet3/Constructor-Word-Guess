function Letter(character) {
    this.character = character; // a string value to store the underlying character for the letter
    this.guess = false; //a boolean value that stores whether the 'character' has been guessed yet.
    this.showGuess = function () {
        if (this.guess === true) { //a function that returns the underlyig character if the letter has been guessed
            return this.character;
        } else { //an underscore if the letter has not been guessed.
            return "_";
        }
    }
    this.checkGuess = function (guess) { //a function that takes a character as an argument and checks it against the underlying character
        var guess = "W";
        if (guess === this.character) {
            this.guess = true; // updates the stored boolean value to true if the guess is correct
        }
        else {
            return false;
            
        }
    }

module.exports = Letter;
}