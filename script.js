let playerScore = 0;
let computerScore = 0;
let moves = 0;

function playRound(playerSelection) {
    if (moves === 5) {
        return; // Game has already ended
    }

    const computerSelection = getComputerChoice();
    const result = getResult(playerSelection, computerSelection);

    moves++;
    updateScores(result);

    displayResult(result);
    updateDisplay();

    if (moves === 5) {
        endGame();
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getResult(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        playerScore++;
        return 'win';
    } else {
        computerScore++;
        return 'lose';
    }
}

function updateScores(result) {
    if (result === 'win') {
        playerScore++;
    } else if (result === 'lose') {
        computerScore++;
    }
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Round ${moves}: ${result.toUpperCase()}`;
}

function updateDisplay() {
    const computerScoreElement = document.getElementById('computerScore');
    const playerScoreElement = document.getElementById('playerScore');
    const movesElement = document.getElementById('moves');

    computerScoreElement.textContent = `Computer: ${computerScore}`;
    playerScoreElement.textContent = `You: ${playerScore}`;
    movesElement.textContent = `Moves: ${moves}`;
}

function endGame() {
    let winner = 'It\'s a Draw!';
    if (playerScore > computerScore) {
        winner = 'YOU WON!';
    } else if (playerScore < computerScore) {
        winner = 'YOU LOSE!';
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = `${winner}`;
}
