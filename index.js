function getComputerChoice() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    switch (randomNumber) {
        case 1:
            //console.log("Computer Choice: Rock");
            return 1;
            break;
        case 2:
            //console.log("Computer Choice: Paper");
            return 2;
            break;
        case 3:
            //console.log("Computer Choice: Scissors");
            return 3;
            break;
    }
}


function getPlayerChoice() {
    return null;
}

function playRound() {
    return null;
}



// console.log(getComputerChoice());

/*
game(1, 1); // draw 
game(1, 2); // win
game(1, 3); // lose
game(2, 1); // lose 
game(2, 2); // draw
game(2, 3); // win
game(3, 1); // lose
game(3, 2); // win
game(3, 3); // draw
*/

