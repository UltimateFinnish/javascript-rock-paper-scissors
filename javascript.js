
let computerSelection;
let playerSelection;
let playerWins = 0;
let computerWins = 0;

rockbtn.addEventListener('click', function() {
    playerSelection = 'rock';
    playRound();
});

paperbtn.addEventListener('click', function() {
    playerSelection = 'paper';
    playRound();
});

scissorsbtn.addEventListener('click', function() {
    playerSelection = 'scissors';
    playRound();
});


function computerPlay(){
    let RPS = ['rock', 'paper', 'scissors']; // Puts Rock, Paper and scissors into an array.
    computerSelection = RPS[Math.floor(Math.random() * RPS.length)];    //Adds a random string from RPS-array to computerSelection
    return computerSelection;
}

function playRound() {
    if (playerWins == 5 || computerWins == 5) {
        alert('One of you already won!');
    } else {
    computerSelection = computerPlay(); // Grabs a value from function computerPlay and adds it into variable computerSelection

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

document.getElementById('playerScore').innerHTML = 'Player Wins: ' + playerWins;
document.getElementById('computerScore').innerHTML = 'Computer Wins: ' + computerWins;

}

if (playerWins == 5 || computerWins == 5) {
    if (playerWins == 5) {
        document.getElementById('theWinner').innerHTML = 'You are the winner!';
    } else {
        document.getElementById('theWinner').innerHTML = 'The computer wins!'
    }
}
}

// NOT NEEDED ANYMORE! (PLAYS ONLY A 5 ROUND GAME!)
/* function game() {
    for (i = 0; i < 5; i++){ //Loops 5 rounds of function playRound();
        playRound(playerSelection, computerSelection);
        
    }
    if (playerWins == computerWins) { // If a tie -
        alert(`It's a complete tie! Try again to see if you can beat the computer next time! \nYour wins: ${playerWins}. \nComputer's wins: ${computerWins}`);
    } else if (playerWins > computerWins) { // If player has more wins than computer
        alert(`You won the whole game! Good job! \nYour wins: ${playerWins}. \nComputer's wins: ${computerWins}`);
    } else {    //If computer has more wins than player
        alert(`Oh no! You lost! Better luck next time! \nYour wins: ${playerWins}. \nComputer's wins: ${computerWins}`);
    }
} */