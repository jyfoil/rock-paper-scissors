function computerPlay() {
  const randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    console.log("Computer chose Rock!");
    return "rock";
  } else if (randomChoice === 1) {
    console.log("Computer chose Paper!");
    return "paper";
  } else {
    console.log("Computer chose Scissors!");
    return "scissors";
  }
}

function playerSelection() {
  const choice = prompt("Rock, Paper or Scissors?").toLowerCase();
  if (choice === "rock") {
    console.log("You chose Rock!");
    return "rock";
  } else if (choice === "paper") {
    console.log("You chose Paper!");
    return "paper";
  } else if (choice === "scissors") {
    console.log("You chose Scissors!");
    return "scissors";
  } else {
    alert("Please choose Rock, Paper, or Scissors!");
  }
}

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

playRound(playerSelection(), computerPlay());
