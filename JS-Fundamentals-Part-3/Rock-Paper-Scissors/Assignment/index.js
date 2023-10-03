const randomChoice = ['rock','paper','scissors'];

function getComputerChoice() {
    const choice = randomChoice[Math.floor(Math.random() * randomChoice.length)];
    return choice;
}

function winnerCheck (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'tie';
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        return 'Player';
    }
    else {
        return 'Computer';
    }
}

function playRound (playerSelection, computerSelection) {
    const outcome = winnerCheck (playerSelection, computerSelection);
    if (outcome == 'tie') {
        return 'It\'s a tie';
    }
    else if (outcome == 'Player') {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice() {
    let validateInput = false;
    while (validateInput == false) {
        const choice = prompt('Please choose your weapon: Rock, Paper or Scissors?');
        if (choice == null) {
            continue;
        }
        const choiceLower = choice.toLowerCase();
        if (randomChoice.includes(choiceLower)) {
            validateInput = true;
            return choiceLower;
        }   
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log('Welcome to the game, are you ready to play?')
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        if (winnerCheck(playerSelection, computerSelection) == 'Player') {
            playerScore++;
        }
        else if (winnerCheck(playerSelection, computerSelection) == 'Computer') {
            computerScore++;
        }
    }
    console.log('The end - Game over');
    
    if (playerScore > computerScore) {
        console.log('Player is the winner');
    }
    else if (playerScore < computerScore) {
        console.log('Computer is the winner');
    }
    else {
        console.log('It\'s a tie');
    }
}

game();
