console.log(Math.random().toString(27).substring(2, 15))

const letters = ["a", "b", "c"]
let computerChoice;
let userGuesses;
let wins = 0;
let losses = 0;
let attemptsLeft;
gameReset()
updateScreen()


function handleSelection(key) {
    if (key === computerChoice) {
        wins++
        gameReset()
    }
    else {
        attemptsLeft--
        userGuesses.push(key)
        
        if (attemptsLeft = 0) {
            losses++
            gameReset()
        }
    }
    updateScreen()

}

function updateScreen() {
    let output = "Wins: " + wins + "<br>Losses: " + losses + "<br>Guesses left: " + attemptsLeft + "<br>Your guesses so far: " + userGuesses
    document.querySelector("#game").innerHTML = output;
}

function gameReset() {
    attemptsLeft = 9
    userGuess = []
    computerChoice = letters[Math.floor(Math.random() * letters.length)]
}



