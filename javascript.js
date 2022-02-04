computerPlay();

function computerPlay(){
    let RPS = ['Rock', 'Paper', 'Scissors'];
    console.log(RPS[Math.floor(Math.random() * RPS.length)]);
}