
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}
function playRound(playerSelection, computerSelection) {
    // Convert both selections to lowercase for case-insensitive comparison
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Determine the winner or if it's a tie
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return "You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection;
    } else {
        return "You Lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        const computerSelection = getComputerChoice();

        console.log("Round " + round + ":");
        console.log("You chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);

        const result = playRound(playerSelection, computerSelection);
        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }

        console.log(result);
        console.log("Player Score: " + playerScore + ", Computer Score: " + computerScore);
        console.log("---------------------------");
    }

    // Determine the winner of the game
    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins the game! Better luck next time.");
    } else {
        console.log("It's a tie! The game ends in a draw.");
    }
}

// Call the playGame function to start the game
playGame();
