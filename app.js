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
    return "Nobody wins! Tied!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats Paper!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats scissors!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors?")?.toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
