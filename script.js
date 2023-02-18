let compChoice = Math.floor(Math.random()*3) + 1;

function getComputerChoice(compChoice) {
    let result;
    if (compChoice == 1) {
        result = "Rock";
    } else if (compChoice == 2) {
        result = "Paper";
    } else if (compChoice == 3) {
        result = "Scissors";
    }
    return result;
}

let playerSelection = window.prompt("Enter Rock, Paper, or Scissors");
let computerSelection = getComputerChoice(compChoice);

function playRound(playerSelection, computerSelection) {

}