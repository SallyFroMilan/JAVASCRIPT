// se metto queste parti allinterno del lavoro rockpaperscissor UFFICIALE ovvero indexjs funzionano!! 
// le parti restante non le ho verificate


let playerScore = 0;
let computerScore = 0;              // funzia

let randomChoice = ['rock','paper','scissors'];  

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    return randomChoice[choice];
}                                   // funzia

function playerSelection() {
    let choice =  prompt('Please choose your weapon: Rock, Paper or Scissors?');
    while (randomChoice.includes(choice) === false);
    return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie! No one wins!';
    }
    else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "scissors") {
                    return 'You win! Rock beats scissors';
                }
                else {
                    return 'You lose! Paper beats rock';
                }
                break;
            case "paper":
                if (computerSelection === "rock") {
                    return 'You win! Paper beats rock';
                }
                else {
                    return 'You lose! Scissors beat paper';
                }
                break;
            case "scissors":
                if (computerSelection === "paper") {
                    return 'You win! Scissors beat paper';
                }
                else {
                    return 'You lose! Rock beats scissors';
                }
                break;
        }
    }
}

function game() {
    console.log('Enjoy rock, paper, scissors game!');
    for (let i = 0; i < 5; i++) {
        let winnerText = playRound(playerSelection(), getComputerChoice());
        if (winnerText.includes('You win!')) {
            playerScore += 1; 
        }
        else if (winnerText.includes('You lose!')) {
            computerScore +=1;
        }
        console.log(winnerText);
        console.log(playerScore.toString() + " - " + computerScore.toString() + " (Player - Machine)");
    }
}

game();


