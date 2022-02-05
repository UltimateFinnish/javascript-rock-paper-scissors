let playerSelection = prompt("Rock, paper or scissors.");
playerSelection = playerSelection.toLowerCase();
let computerSelection;

function computerPlay(){
    let RPS = ['rock', 'paper', 'scissors']; // Puts Rock, Paper and scissors into an array.
    computerSelection = RPS[Math.floor(Math.random() * RPS.length)];    //Adds a random string from RPS-array to computerSelection
    return computerSelection;
}

playRound(playerSelection, computerSelection);

function playRound() {
computerSelection = computerPlay(); // Grabs a value from function computerPlay and adds it into variable computerSelection
console.log(computerSelection);
console.log(playerSelection);

if (playerSelection == computerSelection) { //Checks if both chose the same and got a tie
    alert('It\'s a tie!');
} else if (playerSelection == 'rock') { // Checks what the computer chose after checking what the player chose to determine the winner
    if ( computerSelection == 'paper') {
        alert('You lose! Paper beats Rock!');
    } else {
        alert('You win! Rock beats scissors!');
    }
} else if (playerSelection == 'paper'){ // Checks what the computer chose after checking what the player chose to determine the winner
    if (computerSelection == 'rock'){
        alert('You win! Paper beats Rock!');
    } else {
        alert('You lose! Scissors beat paper!');
    }
} else if (playerSelection == 'scissors'){ // Checks what the computer chose after checking what the player chose to determine the winner
    if (computerSelection == 'rock') {
        alert('You lose! Rock beats scissors!');
    } else {
        alert('You win! Scissors beats Paper!')
    }
}
}

