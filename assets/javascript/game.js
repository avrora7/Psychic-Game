console.log(Math.random().toString(27).substring(2, 15))

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let computerChoice;
let userGuesses;
let wins = 0;
let losses = 0;
let attemptsLeft;
gameReset()
updateScreen()

document.onkeyup = function(event) {
    let placeInArray = letters.indexOf(event.key)
    
    if (placeInArray > -1) {
        handleSelection(event.key);
    }
}

function handleSelection(key) {
    if (key === computerChoice) {
        wins++
        gameReset()
    }
    else {
        attemptsLeft--
        userGuesses.push(key)
        
        if (attemptsLeft === 0) {
            losses++
            gameReset()
        }
    }
    updateScreen()

}

function updateScreen() {
    let output = "Wins: " + wins + "<br>Losses: " + losses + "<br>Guesses left: " + attemptsLeft + "<br>Your guesses so far: " + userGuesses.join()
    document.querySelector("#game").innerHTML = output;
}

function gameReset() {
    attemptsLeft = 9
    userGuesses = []
    computerChoice = letters[Math.floor(Math.random() * letters.length)]
}



