function getComputerChoice() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    switch (randomNumber) {
        case 1:
            return rock;
            break;
        case 2:
            return paper;
            break;
        case 3:
            return scissors;
            break;
    }
}


function getPlayerChoice() {
    // Get Player Choice by Button
}

function playRound(cpu, player) {
    // cpu = getComputerChoice();
    // player = getPlayerChoice();
}

let cpuScore = 0;
let playerScore = 0;
let drawScore = 0;

for (let i = 5; i > 0; i--) {
    // Update Score in Results
    // Add Reset Button that Resets Game
    result = playRound();

    if (result == false) {
        cpuScore += 1;
    } else if (result == true) {
        playerScore += 1;
    } else {
        drawScore += 1;
    }
}

