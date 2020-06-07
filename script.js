
// namespacing
const wordApp = {};


// init function for the app

wordApp.init = function () {

    // Input for player name

    let Name = $('.name');

    let Value = $('.jqValue');

    const playerName = Name.on('input', function (event) {
        return Value.html(Name.val());
    });

    // Array of words to guess

    const words = ['jump', 'book', 'far', 'concert', 'ice', 'road', 'pizza', 'bike'];

    // Randomizing word to be displayed

    let word = words[Math.floor(Math.random() * words.length)];

    let wordDisp = word.toUpperCase();



    //displaying the word (word needs to be half hidden eventually)

    document.getElementById("wordToGuess").innerHTML = wordDisp;

    // Setting score counter to 0

    let count = 0;

    // Player guessing the word
    let guessName = $('.playerGuess');
    let guessValue = $('.playerValue');

    guessName.on('input', function (event) {
        let guessedWord = guessName.val();
        return guessValue.html(guessedWord);
    });


    // Match the word displayed and the word player entered
    guessName.on('keypress', function (e) {
        //when player hits enter
        if (e.which === 13) {
            $('#hidden').hide();
            let finalGuess = guessName.val();
            //look into adding a counter here, start the value of 0 and add based on answers
            if (finalGuess === word) {
                $('#score').text('a true hero!');
                count = count + 1;
                $('.count').html(count);
            } else {
                $('#score').text('Not good enough!');
            }

        }
    });

}

// Clearing result and reloading app

function reloadPage() {
    location.reload(true);
}


// Document ready

$(document).ready(function () {

    // Calling init method within document ready

    wordApp.init();
})







