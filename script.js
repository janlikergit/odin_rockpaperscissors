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

//getComputerChoice(computerSelection);

let playerSelection

function getPlayerChoice() {
    playerSelection = (window.prompt("Enter Rock, Paper, or Scissors")).toLowerCase();
}

//getPlayerChoice(playerSelection);

function checkInput() {
    if ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissors")) {
        alert("Please refresh the page and enter a valid choice.");
    }
}

//checkInput(playerSelection);

let playerPoints = 0;
let computerPoints = 0;

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock") && (computerSelection == "rock")) {
        return "Tie. Play again.";
    } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        ++computerPoints;
        return "You Lose! Paper beats Rock.";
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        ++playerPoints;
        return "You Win! Rock beats Scissors.";
    } else if ((playerSelection == "paper") && (computerSelection == "paper")) {
        return "Tie. Play again.";
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        ++computerPoints;
        return "You Lose! Scissors beats Paper.";
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        ++playerPoints;
        return "You Win! Paper beats Rock.";
    } else if ((playerSelection == "scissors") && (computerSelection == "scissors")) {
        return "Tie. Play again.";
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        ++computerPoints;
        return "You Lose! Rock beats Scissors.";
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        ++playerPoints;
        return "You Win! Scissors beats Paper.";
    }
}

function display (playerPoints, computerPoints) {
    if (playerPoints > computerPoints) {
        console.log("You: " + playerPoints + " - " + "Comp: " + computerPoints + " You Win!")
    } else if (computerPoints > playerPoints) {
        console.log(("You: " + playerPoints + " - " + "Comp: " + computerPoints + " You Lose!"))
    } else if (playerPoints == computerPoints) {
        console.log("You: " + playerPoints + " - " + "Comp: " + computerPoints + " Draw!")
    }
}

for (let i = 0; i < 5; i++) {
    function game() {
        getPlayerChoice(playerSelection);
        getComputerChoice(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        }
    game();
}

display(playerPoints, computerPoints);

