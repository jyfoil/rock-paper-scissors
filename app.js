let playerScore = 0;
let computerScore = 0;

const body = document.querySelector("body");
const winner = document.createElement("div");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const resetGame = document.querySelector(".reset");
const scoreBoard = document.createElement("div");
const finalScore = document.createElement("div");

rock.addEventListener("click", () => {
  playGame("rock");
});

paper.addEventListener("click", () => {
  playGame("paper");
});

scissors.addEventListener("click", () => {
  playGame("scissors");
});

resetGame.addEventListener("click", reset);

function computerPlay() {
  const randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    return "rock";
  } else if (randomChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    winner.textContent = "Nobody wins! Tied!";
    body.appendChild(winner);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    winner.textContent = "You lose! Paper beats Rock!";
    body.appendChild(winner);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    winner.textContent = "You lose! Scissors beats Paper!";
    body.appendChild(winner);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    winner.textContent = "You lose! Rock beats Scissors!";
    body.appendChild(winner);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    winner.textContent = "You win! Rock beats scissors!";
    body.appendChild(winner);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    winner.textContent = "You win! Paper beats Rock!";
    body.appendChild(winner);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    winner.textContent = "You win! Scissors beats Paper!";
    body.appendChild(winner);
  }
}

function playGame(btn) {
  const computerSelection = computerPlay();
  playRound(btn, computerSelection);
  updateScore();
  tellWinner();
}

function updateScore() {
  scoreBoard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
  body.appendChild(scoreBoard);
}

function tellWinner() {
  if (playerScore === 5) {
    finalScore.textContent = "Player wins the game!";
    body.appendChild(finalScore);
    disableBtn();
  } else if (computerScore === 5) {
    finalScore.textContent = "Computer wins the game!";
    body.appendChild(finalScore);
    disableBtn();
  }
}

function disableBtn() {
  rock.setAttribute("disabled", 1);
  paper.setAttribute("disabled", 1);
  scissors.setAttribute("disabled", 1);
}

function reset() {
  if (playerScore === 5 || computerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    body.removeChild(scoreBoard);
    body.removeChild(finalScore);
    body.removeChild(winner);
    rock.removeAttribute("disabled");
    paper.removeAttribute("disabled");
    scissors.removeAttribute("disabled");
  } else {
    playerScore = 0;
    computerScore = 0;
    body.removeChild(winner);
    body.removeChild(scoreBoard);
  }
}
