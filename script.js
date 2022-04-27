let newGame = document.querySelector('#newgame');

let leftCol = document.querySelector('#left');
let middleCol = document.querySelector('#center');
let rightCol = document.querySelector('#right');

let rock = document.createElement('button');
let paper = document.createElement('button');
let scissors = document.createElement('button')

let winner = "";

rock.classList.add = 'btn btn-outline-primary';
paper.classList.add = 'btn btn-outline-primary';
scissors.className.add = 'btn btn-outline-primary';

rock.setAttribute('id', 'rock');
paper.setAttribute('id', 'paper');
scissors.setAttribute('id', 'scissors');

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

newGame.addEventListener('click', newGameFunction);

let win = document.createElement('h3');

let winbox = document.querySelector('#winner')

function newGameFunction() {
  leftCol.appendChild(rock);
  middleCol.appendChild(paper);
  rightCol.appendChild(scissors);
  addClassesFunction();
  playRound(playerPlay(), computerPlay());
}

function addClassesFunction() {
  rock.className = "btn btn-outline-danger my-4";
  paper.className = "btn btn-outline-danger my-4";
  scissors.className = "btn btn-outline-danger my-4";
}

// Generate computers guess
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

// Player's selection
function playerPlay() {
  rock.addEventListener('click', () => {
    playerGuess = "rock";
  })
  paper.addEventListener('click', () => {
    playerGuess = "paper";
  })
  scissors.addEventListener('click', () => {
    playerGuess = "scissors";
  })
  return playerGuess;
}

// Play a round
function playRound(player, computer) {
  if (player == computer) {
    console.log("It's a draw!");
  } else if (player == "rock") {
    if (computer == "paper") {
      console.log("Paper covers rock - Computer wins!");
      winner = "computer";
    } else {
      console.log("Rock breaks scissors - Player wins!");
      winner = "player";
    }
  } else if (player == "paper") {
    if (computer == "scissors") {
      console.log("Scissors cut paper - Computer wins!");
      winner = "computer";
    } else {
      console.log("Paper covers rock - Player wins!");
      winner = "player";
    }
  } else if (player == "scissors") {
    if (computer == "rock") {
      console.log("Rock breaks scissors - Computer wins!");
      winner = "computer";
    } else {
      console.log("Scissors cut paper - Player wins!");
      winner = "player";
    }
  } else {
    console.log("I did not understand that!");
  }
  if (winner == "computer") {
    win.textContent = "You Lose :(";
  } else if (winner = "player") {
    win.textContent = "You Win! :D";
  } else {
    win.textContent = "It's a draw";
  }
  winbox.appendChild(win);
}
   // Generate computers guess
//    function computerPlay() {
//      switch (Math.floor(Math.random() * 3)) {
//        case 0:
//          computerGuess = "rock";
//          break;
//        case 1:
//          computerGuess = "paper";
//          break;
//        case 2:
//          computerGuess = "scissors";
//          break;
//      }
//      return computerGuess;
//    }
//
//    // Prompt user for selection
//    function playerPlay() {
//      let playerGuess = prompt("Rock, Paper or Scissors?");
//      playerGuess = playerGuess.toLowerCase();
//      return playerGuess;
//    }
//
//    // Play a single round
//    function playRound(player, computer) {
//      if (player == computer) {
//        console.log("It's a draw!");
//      } else if (player == "rock") {
//        if (computer == "paper") {
//          console.log("Paper covers rock - Computer wins!");
//          winner = "computer";
//        } else {
//          console.log("Rock breaks scissors - Player wins!");
//          winner = "player";
//        }
//      } else if (player == "paper") {
//        if (computer == "scissors") {
//          console.log("Scissors cut paper - Computer wins!");
//          winner = "computer";
//        } else {
//          console.log("Paper covers rock - Player wins!");
//          winner = "player";
//        }
//      } else if (player == "scissors") {
//        if (computer == "rock") {
//          console.log("Rock breaks scissors - Computer wins!");
//          winner = "computer";
//        } else {
//          console.log("Scissors cut paper - Player wins!");
//          winner = "player";
//        }
//      } else {
//        console.log("I did not understand that!");
//      }
//      return score;
//    }
//
//    // Loop through 5 rounds of the game
//    function game() {
//      for (let i = 0; i < 5; i++) {
//        playRound(playerPlay(), computerPlay());
//        
//      }
//      console.log(`Final Score - Player: ${score[0]} Computer: ${score[1]}`);
//      if (score[0] > score [1]) {
//        console.log("Player Wins!");
//      } else if (score[1] > score [0]) {
//        console.log("Computer Wins!");
//      } else {
//        console.log("It's a draw!");
//      }
//    }
//
//    let score = [0, 0];
//
//    game();//