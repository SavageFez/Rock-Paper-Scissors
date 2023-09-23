function getComputerChoice() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    switch (randomNumber) {
        case 1:
            //console.log("Computer Choice: Rock");
            return "ROCK";
            break;
        case 2:
            //console.log("Computer Choice: Paper");
            return "PAPER";
            break;
        case 3:
            //console.log("Computer Choice: Scissors");
            return "SCISSORS";
            break;
    }
}


function getPlayerChoice() {
    let choice = prompt("Select Rock, Paper, or Scissors").toUpperCase();
    return choice;
}

function playRound(cpu, player) {
    cpu = getComputerChoice();
    player = getPlayerChoice();


    console.log("Computer Choice: " + cpu);
    console.log("Player Choice: " + player);

    if (cpu == "ROCK" && player == "ROCK") {
        console.log("DRAW!");
    } else if (cpu == "ROCK" && player == "PAPER") {
        console.log("YOU WIN! PAPER BEATS ROCK!");
        return true;
    } else if (cpu == "ROCK" && player == "SCISSORS") {
        console.log("YOU LOSE! ROCK BEATS SCISSORS!");
        return false;
    } else if (cpu == "PAPER" && player == "PAPER") {
        console.log("DRAW!");
    } else if (cpu == "PAPER" && player == "ROCK") {
        console.log("YOU LOSE! PAPER BEATS ROCK!");
        return false;
    } else if (cpu == "PAPER" && player == "SCISSORS") {
        console.log("YOU WIN! SCISSORS BEATS PAPER!");
        return true;
    } else if (cpu == "SCISSORS" && player == "SCISSORS") {
        console.log("DRAW!");
    } else if (cpu == "SCISSORS" && player == "PAPER") {
        console.log("YOU LOSE! SCISSORS BEATS PAPER!");
        return false;
    } else if (cpu == "SCISSORS" && player == "ROCK") {
        console.log("YOU WIN! ROCK BEATS SCISSORS!");
        return true;
    } else {
        return console.error("Failed at playRound");
    }
}

let cpuScore = 0;
let playerScore = 0;
let drawScore = 0;

for (let i = 5; i > 0; i--) {
    
    result = playRound();

    if (result == false) {
        cpuScore += 1;
    } else if (result == true) {
        playerScore += 1;
    } else {
        drawScore += 1;
    }
}

console.log("Computer Score: " + cpuScore + " | " + "Player Score: " + playerScore + " | " + "Draws:" + drawScore);


