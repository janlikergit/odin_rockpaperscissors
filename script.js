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

let playerSelection

function getPlayerChoice() {
    playerSelection = (window.prompt("Enter Rock, Paper, or Scissors")).toLowerCase();
}

//getPlayerChoice(playerSelection);

/*
function checkInput() {
    if ((playerSelection !== "rock") && (playerSelection !== "paper") && (playerSelection !== "scissors")) {
        alert("Please refresh the page and enter a valid choice.");
    }
}
*/

//checkInput(playerSelection);

let playerPoints = 0;
let computerPoints = 0;

let readout = document.getElementById("readout");

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock") && (computerSelection == "rock")) {
        readout.innerHTML = "Tie. Play again.";
    } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        ++computerPoints;
        readout.innerHTML = "You Lose! Paper beats Rock.";
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        ++playerPoints;
        readout.innerHTML = "You Win! Rock beats Scissors.";
    } else if ((playerSelection == "paper") && (computerSelection == "paper")) {
        readout.innerHTML = "Tie. Play again.";
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        ++computerPoints;
        readout.innerHTML = "You Lose! Scissors beats Paper.";
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        ++playerPoints;
        readout.innerHTML = "You Win! Paper beats Rock.";
    } else if ((playerSelection == "scissors") && (computerSelection == "scissors")) {
        readout.innerHTML = "Tie. Play again.";
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        ++computerPoints;
        readout.innerHTML = "You Lose! Rock beats Scissors.";
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        ++playerPoints;
        readout.innerHTML = "You Win! Scissors beats Paper.";
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

/*
//Plays 5 rounds

for (let i = 0; i < 5; i++) {
    function game() {
        getPlayerChoice(playerSelection);
        getComputerChoice(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        }
    game();
}
*/



function game() {
    //getPlayerChoice(playerSelection);
    getComputerChoice(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}


//display(playerPoints, computerPoints);

const end = document.getElementById("end")

function Victory() {
    if (playerPoints > 4) {
        end.innerHTML = "Victory!";
        quit = true;
    } else if (computerPoints > 4) {
        end.innerHTML = "Game Over!";
        quit = true;
    }
}

document.getElementById("pScore").innerHTML += `${playerPoints}`;
document.getElementById("cScore").innerHTML += `${computerPoints}`;

document.getElementById("rock").addEventListener("click", playRock);

function playRock() {
    playerSelection = "rock";
    if(playerPoints < 5 && computerPoints < 5) {
        game();
        document.getElementById("pScore").innerHTML = `${playerPoints}`;
        document.getElementById("cScore").innerHTML = `${computerPoints}`;
        Victory();
    } else {
        return;
    }
}

document.getElementById("paper").addEventListener("click", playPaper);

function playPaper() {
    playerSelection = "paper";
    if(playerPoints < 5 && computerPoints < 5) {
        game();
        document.getElementById("pScore").innerHTML = `${playerPoints}`;
        document.getElementById("cScore").innerHTML = `${computerPoints}`;
        Victory();
    } else {
        return;
    }
}

document.getElementById("scissors").addEventListener("click", playScissors);

function playScissors() {
    playerSelection = "scissors";
    if(playerPoints < 5 && computerPoints < 5) {
        game();
        document.getElementById("pScore").innerHTML = `${playerPoints}`;
        document.getElementById("cScore").innerHTML = `${computerPoints}`;
        Victory();
    } else {
        return;
    }
}



