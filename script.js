const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const content = document.querySelector("#winner");
const scoreboard = document.querySelector("#scoreboard");
const gameOver = document.querySelector("#gameover");

let playerGuess = "";
let score = [0, 0];

rock.addEventListener("click", () => {
  playerGuess = "rock";
  playGame(playerGuess);
});

paper.addEventListener("click", () => {
  playerGuess = "paper";
  playGame(playerGuess);
});

scissors.addEventListener("click", () => {
  playerGuess = "scissors";
  playGame(playerGuess);
});

// Generate computer guess
function computerPlay() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      computerGuess = "rock";
      break;
    case 1:
      computerGuess = "paper";
      break;
    case 2:
      computerGuess = "scissors";
      break;
  }
  return computerGuess;
}

// Play a game
function playGame(player) {
  let computer = computerPlay();
  if (player == computer) {
    content.textContent = "It's a draw!";
  } else if (player == "rock") {
    if (computer == "paper") {
      content.textContent = "Paper covers rock - Computer wins!";
      ++score[1];
    } else {
      content.textContent = "Rock breaks scissors - Player wins!";
      ++score[0];
    }
  } else if (player == "paper") {
    if (computer == "scissors") {
      content.textContent = "Scissors cut paper - Computer wins!";
      ++score[1];
    } else {
      content.textContent = "Paper covers rock - Player wins!";
      ++score[0];
    }
  } else if (player == "scissors") {
    if (computer == "rock") {
      content.textContent = "Rock breaks scissors - Computer wins!";
      ++score[1];
    } else {
      content.textContent = "Scissors cut paper - Player wins!";
      ++score[0];
    }
  } else {
    content.textContent = "I did not understand that!";
  }
  scoreboard.textContent =
    "Player: " + score[0] + "  ---  Computer: " + score[1];
  if (score[0] == 5) {
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
    gameOver.textContent = "Player got to 5 first! Player wins!";
  } else if (score[1] == 5) {
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
    gameOver.textContent = "Computer got to 5 first! Computer wins!";
  }
}
