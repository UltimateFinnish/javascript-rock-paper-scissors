const playerSelection = prompt("Rock, paper or scissors.");

function computerPlay(){
    let RPS = ['Rock', 'Paper', 'Scissors']; // Puts Rock, Paper and scissors into an array.
    computerSelection = RPS[Math.floor(Math.random() * RPS.length)];    //Adds a random string from RPS-array to computerSelection
    return computerSelection;
}

playRound();

function playRound(playerSelection, computerSelection) {
computerSelection = computerPlay(); // Grabs a value from function computerPlay and adds it into variable computerSelection
console.log(computerSelection);
}