function Letter(value) {// Contains a constructor, Letter.
    this.letter = value;
    this.guessed = false;
    this.toString = function () {//A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

        if (this.letter === " ") {
            this.guessed = true;
            return " ";
        } else {
            if (this.guessed === false) {
                return "_";
            } else {
                return this.letter;
            }
        }
    };
    
    this.guess = function (guess) {// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
        if (guess === this.letter) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;