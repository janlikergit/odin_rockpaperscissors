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

console.log(getComputerChoice(compChoice));
