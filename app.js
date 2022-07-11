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

const body = document.querySelector("body");
const winner = document.createElement("div");

function game() {
  const rock = document.querySelector(".rock");
  rock.addEventListener("click", () => {
    const computerSelection = computerPlay();
    playRound("rock", computerSelection);
    updateScore();
  });

  const paper = document.querySelector(".paper");
  paper.addEventListener("click", () => {
    const computerSelection = computerPlay();
    playRound("paper", computerSelection);
    updateScore();
  });
  const scissors = document.querySelector(".scissors");
  scissors.addEventListener("click", () => {
    const computerSelection = computerPlay();
    playRound("scissors", computerSelection);
    updateScore();
  });
}

let playerScore = 0;
let computerScore = 0;

const scoreBoard = document.createElement("div");

function updateScore() {
  scoreBoard.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
  body.appendChild(scoreBoard);
}

game();
