console.log("Hello World");

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return "rock";
    } else if (randomNumber < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer is the overall winner!");
    } else {
        console.log("It's an overall tie!");
    }
}

// Start the game
playGame();
