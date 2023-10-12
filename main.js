const choices = document.querySelectorAll('.choice');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart-button');

let playerScore = 0;
let computerScore = 0;

choices.forEach(choice => {
    choice.addEventListener('click', playGame);
});

function getComputerChoice() {
    const choices = ['piedra', 'papel', 'tijera'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playGame(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

    const winner = getWinner(playerChoice, computerChoice);
    showResult(winner, computerChoice);

    if (winner === 'jugador') {
        playerScore++;
    } else if (winner === 'computadora') {
        computerScore++;
    }

    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;

    if (playerScore === 5) {
        resultText.textContent = "¡GANASTE! ¿Quieres volver a jugar?";
        restartButton.style.display = 'block';
        disableChoices();
    }
    
    if (computerScore === 5) {
        resultText.textContent = "¡Perdiste! La computadora ganó. ¿Quieres volver a jugar?";
        restartButton.style.display = 'block';
        disableChoices();
    }
}

function disableChoices() {
    choices.forEach(choice => {
        choice.removeEventListener('click', playGame);
    });
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    resultText.textContent = "¡Elige una opción!";
    restartButton.style.display = 'none';
    enableChoices();
}

function enableChoices() {
    choices.forEach(choice => {
        choice.addEventListener('click', playGame);
    });
}

function getWinner(player, computer) {
    if (player === computer) {
        return 'empate';
    } else if ((player === 'piedra' && computer === 'tijera') || 
               (player === 'papel' && computer === 'piedra') || 
               (player === 'tijera' && computer === 'papel')) {
        return 'jugador';
    } else {
        return 'computadora';
    }
}

function showResult(winner, computerChoice) {
    if (winner === 'empate') {
        resultText.textContent = `¡Es un empate! Ambos eligieron ${computerChoice}.`;
    } else if (winner === 'jugador') {
        resultText.textContent = `¡Ganaste! La computadora eligió ${computerChoice}.`;
    } else {
        resultText.textContent = `¡Perdiste! La computadora eligió ${computerChoice}.`;
    }
}

restartButton.addEventListener('click', resetGame);
