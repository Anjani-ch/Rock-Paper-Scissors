// DOM Elements
const playerScore = document.querySelector('#player-score')
const computerScore = document.querySelector('#computer-score')
const feedback = document.querySelector('#feedback')
const choices = document.querySelectorAll('i')
const p = document.querySelector('#p')
const playAgain = document.querySelector('#playAgain')
const reset = document.querySelector('#reset')

// Global Variables
let isPlaying = true

// Event Listeners
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (isPlaying === true) {
            compareChoice(e)
        }
    })
})

playAgain.addEventListener('click', restartGame)

reset.addEventListener('click', resetGame)

// Get Player Choice
function playerChoice(e) {
    const choice = e.target.classList[2]

    return choice
}

// Get Computer Choice
function computerChoice() {
    let choice = Math.round(Math.random() * 3)

    if (choice === 0) {
        choice += 1
    }

    if (choice === 1) {
        return 'Rock'
    } else if (choice === 2) {
        return 'Paper'
    } else if (choice === 3) {
        return 'Scissors'
    }
}

// Compare Choices
function compareChoice(e) {
    let player = playerChoice(e)
    let computer = computerChoice()

    // Computer Win Conditions
    if (computer === 'Rock' && player === 'Scissors' || computer === 'Scissors' && player === 'Paper' || computer === 'Paper' && player === 'Rock') {
        feedback.textContent = `${player} Does Not Beat ${computer}. You Lose!`
        computerScore.textContent = parseInt(computerScore.textContent) + 1
    }

    // Player Win Conditions
    if (player === 'Rock' && computer === 'Scissors' || player === 'Scissors' && computer === 'Paper' || player === 'Paper' && computer === 'Rock') {
        feedback.textContent = `${player} Beats ${computer}. You Win!`
        playerScore.textContent = parseInt(playerScore.textContent) + 1
    }

    // Draw Condition
    if (player === computer) {
        feedback.textContent = "It's A Draw!"
    }

    isPlaying = false
    playAgain.style.display = 'inline-block'
    reset.style.display = 'inline-block'
}

function restartGame() {
    feedback.textContent = ''
    playAgain.style.display = 'none'
    reset.style.display = 'none'
    isPlaying = true
}

// Reset Game
function resetGame() {
    playerScore.textContent = 0
    computerScore.textContent = 0
    feedback.textContent = ''
    playAgain.style.display = 'none'
    reset.style.display = 'none'
    isPlaying = true
}