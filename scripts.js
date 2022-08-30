let choicesArray = ['rock', 'paper', 'scissors']
let gameStarted = false

let randomNum
let userChoice
let computerChoice
let userScore = 0
let computerScore = 0

let buttons = document.querySelectorAll('.button')
buttons.forEach(button => button.addEventListener('click', getUserChoice))

function getUserChoice() {
    userChoice = this.innerText.toLowerCase()
    console.log('user: ' + userChoice)

    getComputerChoice();
    console.log('computer: ' + computerChoice)
    playTurn();
}

function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3);
    computerChoice = choicesArray[randomNum]
}


function playTurn() {
    if (!gameStarted) {
        gameStarted = true
    }

    if (compareChoices() == 'user') {
        userScore++
    }
    else if (compareChoices() == 'computer') {
        computerScore++
    }
    else {
        userScore++
        computerScore++
    }
    console.log('userScore: ' + userScore)
    console.log('computerScore: ' + computerScore)

    if (userScore == 5 || computerScore == 5) {
        endMatch()
    }
    
}

function compareChoices() {
    //draw
    if (userChoice == computerChoice)
    return

    //user wins
    else if( (userChoice == 'rock' && computerChoice == 'scissors') ||
        (userChoice == 'paper' && computerChoice == 'rock') ||
        (userChoice == 'scissors' && computerChoice == 'paper')) {
            return 'user'
        }
    // computer wins    
    else return 'computer'
}

function endMatch() {
    if (userScore == 5) {
        resultParagraph.innerText = `You won!`
    }
    else resultParagraph.innerText = `You lost!`;

    userScore = 0;
    computerScore = 0;
    gameStarted = false;
    buttons.forEach(button => {button.disabled = true})

}










// // Get userChoice

// const buttons = document.querySelectorAll('button');

// // function getUserChoice(x) {
// //     console.log(x.id)
// // }  

// buttons.forEach((button) => {
//     button.addEventListener('click', getUserChoice(this));
//   });


// // Get computerChoice
// function getComputerChoice(params) {
//     let options = ['rock', 'paper', 'scissors']
//     let computerChoice = options[Math.floor(Math.random() * 3)]
//     console.log("Computer chose: " + computerChoice);
//     return(computerChoice);
// }


// // Create game() function that compares and prints the winner.
// function game(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//         return ("Tie!")
//     }
//     else if ((userChoice === "scissors" && computerChoice === "paper") ||
//             (userChoice === "rock" && computerChoice === "scissors") ||
//             (userChoice === "paper" && computerChoice === "rock")) {
//                 return (`${userChoice} beats ${computerChoice}. You win!`);}
//     else {
//         return (`${computerChoice} beats ${userChoice}. You lose!`);
//     }
// }