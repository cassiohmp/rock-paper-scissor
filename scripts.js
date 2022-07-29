let rock = document.getElementsByClassName('Rock');
console.log(typeof(rock))



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