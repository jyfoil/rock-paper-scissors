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
