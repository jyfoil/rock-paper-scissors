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

const playerSelection = prompt("Rock, Paper or Scissors?")?.toLowerCase();
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Nobody wins! Tied!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! Paper beats Rock!");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! Scissors beats Paper!");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! Rock beats Scissors!");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock beats scissors!");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper beats Rock!");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors beats Paper!");
  }
}

playRound(playerSelection, computerSelection);
