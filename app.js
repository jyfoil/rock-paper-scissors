function computerPlay() {
  const randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    return "Rock";
  } else if (randomChoice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playerSelection() {
  let choice = prompt("Rock, Paper or Scissors?");
  if (choice === "Rock") {
    return 0;
  } else if (choice === "Paper") {
    return 1;
  } else if (choice === "Scissors") {
    return 2;
  } else {
    alert("Choose Rock, Paper, or Scissors!");
  }
}
