var Letter = require('./Letter.js');

function Word(word) {
    this.fullWord = function (word) {
        var newLetters = [];
        for (var i = 0; i < word.length; i++) {
            var charac = word[i];
            var currentLetter = new Letter(charac);
            newLetters.push(currentLetter);
        }
        return newLetters;
    }

    this.word = this.fullWord(word);

    this.show = function () {
        var showWord = "";
        for (var i = 0; i < this.word.length; i++) {
            var newLetters = this.word[i];
            showWord += currentLetter.display() + " ";
        }
        console.log(showWord);
    }
    this.confirmLetter = function (Letter) {
        for (var i = 0; i < this.word.length; i++) {
            var currentLetter = this.word[i];
            console.log(currentLetter);
            currentLetter.checkGuess(Letter);
        }
        return this.display;
    }
}


module.exports = Word;