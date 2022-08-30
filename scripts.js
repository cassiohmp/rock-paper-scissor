let choicesArray = ['Rock', 'Paper', 'Scissors']
let gameStarted = false

let randomNum
let userChoice
let computerChoice
let userScore = 0
let computerScore = 0

startButton.addEventListener('click', e => {
    gameStarted = true;
    startButton.style.visibility = 'hidden'
    computerChoiceParagraph.innerText = 'Nothing yet...'
    userCounter.innerText = 'Your score: ' + userScore
    computerCounter.innerText = "Computer's score: " + computerScore

    if (gameStarted) {
        images.forEach(img => {
            img.addEventListener('click', getUserChoice)
        })
    }

})

//let buttons = document.querySelectorAll('.button')
//buttons.forEach(button => button.addEventListener('click', getUserChoice))

let images = document.querySelectorAll('.img')


function getUserChoice() {
    userChoice = this.alt
    console.log('user: ' + userChoice)

    getComputerChoice();
    computerChoiceParagraph.innerText = computerChoice
    playTurn();
}

function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3);
    computerChoice = choicesArray[randomNum]
}

function playTurn() {
    if (userChoice == computerChoice) {
        userScore++
        computerScore++
    }
    else if ((userChoice == 'Rock' && computerChoice == 'Scissors') ||
        (userChoice == 'Paper' && computerChoice == 'Rock') ||
        (userChoice == 'Scissors' && computerChoice == 'Paper')) {
        userScore++
    }
    else {
        computerScore++


    }
    userCounter.innerText = 'Your score: ' + userScore
    computerCounter.innerText = "Computer's score: " + computerScore
    if (userScore == 5 || computerScore == 5) {
        endMatch()
    }
}

function endMatch() {
    if (userScore == 5) {
        resultParagraph.innerText = `You win!`
    }
    else resultParagraph.innerText = `You lose!`;

    userScore = 0;
    computerScore = 0;
    gameStarted = false;
    images.forEach(image => { image.removeEventListener('click', getUserChoice)})
    startButton.style.visibility = 'visible'
    startButton.innerText = 'Play Again!'

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
//     let options = ['Rock', 'paper', 'scissors']
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
//             (userChoice === "Rock" && computerChoice === "scissors") ||
//             (userChoice === "paper" && computerChoice === "Rock")) {
//                 return (`${userChoice} beats ${computerChoice}. You win!`);}
//     else {
//         return (`${computerChoice} beats ${userChoice}. You lose!`);
//     }
// }