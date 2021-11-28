function playRound(e) {
  let winOrLose = "";
  let computerSelection = userButtons[Math.floor(Math.random() * 3)].id;
  let playerSelection = this.id;

  switch (playerSelection) {
    case "Rock":
      if (computerSelection === "Rock") {
        winOrLose = "Draw!";
      } else if (computerSelection === "Paper") {
        winOrLose = `You lose! ${computerSelection} beats ${playerSelection}.`;
      } else if (computerSelection === "Scissors") {
        winOrLose = `You win! ${playerSelection} beats ${computerSelection}.`;
      }
      break;

    case "Paper":
      if (computerSelection === "Rock") {
        winOrLose = `You win! ${playerSelection} beats ${computerSelection}.`;
      } else if (computerSelection === "Paper") {
        winOrLose = "Draw!";
      } else if (computerSelection === "Scissors") {
        winOrLose = `You lose! ${computerSelection} beats ${playerSelection}.`;
      }
      break;

    case "Scissors":
      if (computerSelection === "Rock") {
        winOrLose = `You lose! ${computerSelection} beats ${playerSelection}.`;
      } else if (computerSelection === "Paper") {
        winOrLose = `You win! ${playerSelection} beats ${computerSelection}.`;
      } else if (computerSelection === "Scissors") {
        winOrLose = "Draw!";
      }
      break;

    default:
      return "You didn't chose Rock Paper or Scissors, numpty";
  }
  result.textContent = winOrLose;

  if (winOrLose[4] === "w") {
    wins++;
    playerScore.textContent = `You: ${wins}`;
  } else if (winOrLose[4] === "l") {
    loses++;
    computerScore.textContent = `Computer: ${loses}`;
  } else if (winOrLose[0] === "D") {
    draws++;
    drawScore.textContent = `Draws: ${draws}`;
  }

  if (wins === 5 || loses === 5) {
    result.textContent = `${wins > loses ? "You win!" : "You lose!"}`;
  }
}

const userButtons = document.querySelectorAll(".option");
const result = document.querySelector("#result");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const drawScore = document.querySelector("#drawScore");

let wins = 0;
let loses = 0;
let draws = 0;

userButtons.forEach((button) => button.addEventListener("click", playRound));
