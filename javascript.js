let playerSelection = prompt("Rock, paper or scissors.");
playerSelection = playerSelection.toLowerCase();
let computerSelection;
let playerWins = 0;
let computerWins = 0;


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
        computerWins++;
    } else {
        alert('You win! Rock beats scissors!');
        playerWins++;
    }
} else if (playerSelection == 'paper'){ // Checks what the computer chose after checking what the player chose to determine the winner
    if (computerSelection == 'scissors'){
        alert('You lose! Scissors beat paper!');
        computerWins++;
    } else {
        alert('You win! Paper beats Rock!');
        playerWins++;
    }
} else if (playerSelection == 'scissors'){ // Checks what the computer chose after checking what the player chose to determine the winner
    if (computerSelection == 'rock') {
        alert('You lose! Rock beats scissors!');
        computerWins++;
    } else {
        alert('You win! Scissors beats Paper!')
        playerWins++;
    }
}
}

console.log(playerWins);
console.log(computerWins);

function game() {
    for (i = 1; i < 5; i++){
        playRound();
        
    }
}

