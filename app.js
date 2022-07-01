function computerPlay() {
  const randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    console.log("Computer chose Rock!");
    return "Rock";
  } else if (randomChoice === 1) {
    console.log("Computer chose Paper!");
    return "Paper";
  } else {
    console.log("Computer chose Scissors!");
    return "Scissors";
  }
}

function playerSelection() {
  let choice = prompt("Rock, Paper or Scissors?");
  if (choice === "Rock") {
    console.log("You chose Rock!");
    return "Rock";
  } else if (choice === "Paper") {
    console.log("You chose Paper!");
    return "Paper";
  } else if (choice === "Scissors") {
    console.log("You chose Scissors!");
    return "Scissors";
  } else {
    alert("Please choose Rock, Paper, or Scissors!");
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Nobody wins! Tied!");
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    console.log("You lose! Paper beats Rock!");
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    console.log("You lose! Scissors beats Paper!");
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    console.log("You lose! Rock beats Scissors!");
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    console.log("You win! Rock beats scissors!");
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log("You win! Paper beats Rock!");
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    console.log("You win! Scissors beats Paper!");
  }
}

playRound(playerSelection(), computerPlay());
