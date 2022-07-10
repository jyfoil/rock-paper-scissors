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
    return 0;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    console.log("You lose! Paper beats Rock!");
    return -1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    console.log("You lose! Scissors beats Paper!");
    return -1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    console.log("You lose! Rock beats Scissors!");
    return -1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    console.log("You win! Rock beats scissors!");
    return 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    console.log("You win! Paper beats Rock!");
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    console.log("You win! Scissors beats Paper!");
    return 1;
  }
}
