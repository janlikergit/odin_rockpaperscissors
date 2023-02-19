let computerSelection

function getComputerChoice() {
    let x = Math.floor(Math.random()*3) + 1;
    if (x == 1) {
        computerSelection = "rock";
    } else if (x == 2) {
        computerSelection = "paper";
    } else if (x == 3) {
        computerSelection = "scissors";
    }
}

getComputerChoice(computerSelection);

let playerSelection = (window.prompt("Enter Rock, Paper, or Scissors")).toLowerCase();

function checkInput() {
    if ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissors")) {
        alert("Please refresh the page and enter a valid choice.");
    }
}

checkInput(playerSelection);

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock") && (computerSelection == "rock")) {
        return "Tie. Play again.";
    } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        return "You Lose! Paper beats Rock.";
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        return "You Win! Rock beats Scissors.";
    } else if ((playerSelection == "paper") && (computerSelection == "paper")) {
        return "Tie. Play again.";
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        return "You Lose! Scissors beats Paper.";
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        return "You Win! Paper beats Rock.";
    } else if ((playerSelection == "scissors") && (computerSelection == "scissors")) {
        return "Tie. Play again.";
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        return "You Lose! Rock beats Scissors.";
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        return "You Win! Scissors beats Paper.";
    }
}

console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    };
}