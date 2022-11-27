let compChoice = Math.floor((Math.random()*2) + 1);

function getComputerChoice(compChoice) {
    if (compChoice == 1) {
        compChoice = "Rock";
    } else if (compChoice == 2) {
        compChoice = "Paper";
    } else if (compChoice == 3) {
        compChoice = "Scissors";
    }
}

console.log(compChoice);
