let computerScore = 0
let playerScore = 0

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')

const resultDiv = document.querySelector('.result')

const playerScoreSpan = document.querySelector('.score-result[data-player-score]')
const computerScoreSpan = document.querySelector('.score-result[data-computer-score]')

function getComputerChoice() {
    const selections =  ['rock', 'paper', 'scissors']
    const choice = selections[Math.floor(Math.random() * selections.length)]
    return choice
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection)
    if (playerSelection == computerSelection) {
        const p = document.createElement('p')
        p.innerText = 'It\'s a tie'
        resultDiv.appendChild(p)
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection =='paper' && computerSelection =='paper') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')
        ) {
        const p = document.createElement('p');
        p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`
        resultDiv.appendChild(p)

        playerScoreSpan.innerText = parseInt(playerScoreSpan.innerText) + 1
        playerScore++
    }
    else {
        const p = document.createElement('p')
        p.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`
        resultDiv.appendChild(p)

        computerScoreSpan.innerText = parseInt(computerScoreSpan.innerText) + 1
        computerScore++
    }
}

const checkForWinner = (playerScore, computerScore) => {
    console.log('1', playerScore, '2', computerScore)
    if (playerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = `You won! ${playerScore} to ${computerScore} Great job beating the computer!`
        resultDiv.appendChild(h2)
    }

    else if (computerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('computer-won')
        h2.innerText = `You lost! ${playerScore} to ${computerScore} Computer wins!`
        resultDiv.appendChild(h2)
    }
}

rockButton.addEventListener('click', () => {
    const compSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, compSelection)
    checkForWinner (playerScore, computerScore)
})

paperButton.addEventListener('click', () => {
    const compSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, compSelection)
    checkForWinner (playerScore, computerScore)
})

scissorsButton.addEventListener('click', () => {
    const compSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, compSelection)
    checkForWinner (playerScore, computerScore)
})
