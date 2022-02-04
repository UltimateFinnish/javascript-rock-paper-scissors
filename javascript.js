const playerSelection = prompt("Rock, paper or scissors.");

function computerPlay(){
    let RPS = ['Rock', 'Paper', 'Scissors'];
    computerSelection = RPS[Math.floor(Math.random() * RPS.length)];
    console.log(computerSelection);
    return computerSelection;
}

playRound();

function playRound(playerSelection, computerSelection) {
computerPlay();
console.log(computerSelection);
}