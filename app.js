let playerScore = 0;
let computerScore = 0;

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
    console.log("Nobody wins! Tied!");
    winner.textContent = "Nobody wins! Tied!";
    body.appendChild(winner);
    return 0;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    console.log("You lose! Paper beats Rock!");
    winner.textContent = "You lose! Paper beats Rock!";
    body.appendChild(winner);
    return -1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    console.log("You lose! Scissors beats Paper!");
    winner.textContent = "You lose! Scissors beats Paper!";
    body.appendChild(winner);
    return -1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    console.log("You lose! Rock beats Scissors!");
    winner.textContent = "You lose! Rock beats Scissors!";
    body.appendChild(winner);
    return -1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    console.log("You win! Rock beats scissors!");
    winner.textContent = "You win! Rock beats scissors!";
    body.appendChild(winner);
    return 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    console.log("You win! Paper beats Rock!");
    winner.textContent = "You win! Paper beats Rock!";
    body.appendChild(winner);
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    console.log("You win! Scissors beats Paper!");
    winner.textContent = "You win! Scissors beats Paper!";
    body.appendChild(winner);
    return 1;
  }
}

const body = document.querySelector("body");

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
  const computerSelection = computerPlay();
  playRound("rock", computerSelection);
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
  const computerSelection = computerPlay();
  playRound("paper", computerSelection);
});
const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
  const computerSelection = computerPlay();
  playRound("scissors", computerSelection);
});

const winner = document.createElement("div");
