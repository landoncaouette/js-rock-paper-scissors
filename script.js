
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

    // Prompt user for selection
    function playerPlay() {
      let playerGuess = prompt("Rock, Paper or Scissors?");
      playerGuess = playerGuess.toLowerCase();
      return playerGuess;
    }

    // Play a single round
    function playRound(player, computer) {
      if (player == computer) {
        console.log("It's a draw!");
      } else if (player == "rock") {
        if (computer == "paper") {
          console.log("Paper covers rock - Computer wins!");
          ++score[1];
        } else {
          console.log("Rock breaks scissors - Player wins!");
          ++score[0];
        }
      } else if (player == "paper") {
        if (computer == "scissors") {
          console.log("Scissors cut paper - Computer wins!");
          ++score[1];
        } else {
          console.log("Paper covers rock - Player wins!");
          ++score[0];
        }
      } else if (player == "scissors") {
        if (computer == "rock") {
          console.log("Rock breaks scissors - Computer wins!");
          ++score[1];
        } else {
          console.log("Scissors cut paper - Player wins!");
          ++score[0];
        }
      } else {
        console.log("I did not understand that!");
      }
      return score;
    }

    // Loop through 5 rounds of the game
    function game() {
      for (let i = 0; i < 5; i++) {
        playRound(playerPlay(), computerPlay());
        
      }
      console.log(`Final Score - Player: ${score[0]} Computer: ${score[1]}`);
      if (score[0] > score [1]) {
        console.log("Player Wins!");
      } else if (score[1] > score [0]) {
        console.log("Computer Wins!");
      } else {
        console.log("It's a draw!");
      }
    }

    let score = [0, 0];

    game();