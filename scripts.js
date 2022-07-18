// Get userChoice
function getUserChoice(round) {
    let userChoice = prompt(`Round ${round}!\nChoose Rock, Paper or Scissors: `).toLowerCase();
    console.log("You chose: " + userChoice);
    return(userChoice);
}

// Get computerChoice
function getComputerChoice(params) {
    let options = ['rock', 'paper', 'scissors']
    let computerChoice = options[Math.floor(Math.random() * 3)]
    console.log("Computer chose: " + computerChoice);
    return(computerChoice);
}


// Create game() function that compares and prints the winner.
function game(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return ("Tie!")
    }
    else if ((userChoice === "scissors" && computerChoice === "paper") ||
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock")) {
                return (`${userChoice} beats ${computerChoice}. You win!`);}
    else {
        return (`${computerChoice} beats ${userChoice}. You lose!`);
    }}


for (let i=0; i < 5; i++) {
    gameResult = game(getUserChoice(i + 1), getComputerChoice());
    console.log(gameResult);
}