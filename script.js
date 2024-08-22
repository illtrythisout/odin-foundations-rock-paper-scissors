function computerChoice() {
    let randNum = Math.random();
    randNum = randNum * 3;

    if (randNum < 1 && randNum >= 0) {
        return "ROCK";
    } else if (randNum < 2 && randNum >= 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

let playerScore = 0
let computerScore = 0

function playRound(playerChoicePara, computerChoicePara) {
    if (playerChoicePara === computerChoicePara) {
        return "The computer chose " + computerChoicePara + ":\nIt's a tie, let's go again!";
    } else if ((playerChoicePara === "ROCK" && computerChoicePara === "PAPER") || (playerChoicePara === "PAPER" && computerChoicePara === "SCISSORS") || (playerChoicePara === "SCISSORS" && computerChoicePara === "ROCK")) {
        computerScore++;
        return "The computer chose " + computerChoicePara + ":\n" + computerChoicePara + " beats " + playerChoicePara + ", you lose :(";
    } else if ((playerChoicePara === "PAPER" && computerChoicePara === "ROCK") || (playerChoicePara === "SCISSORS" && computerChoicePara === "PAPER") || (playerChoicePara === "ROCK" && computerChoicePara === "SCISSORS")) {
        playerScore++;
        return "The computer chose " + computerChoicePara + ":\n" + playerChoicePara + " beats " + computerChoicePara + ", you win!";
    }
}

function declareWinner() {
    if (playerScore > computerScore) {
        return "You Win!\n \n" + "The score is:\n" + "Computer: " + computerScore + "\nPlayer: " + playerScore;
    } else {
        return "You Lose :(\n \n" + "The score is:\n" + "Computer: " + computerScore + "\nPlayer: " + playerScore;
    }
}

let roundsPlayed = 0
const maxRounds = 5

// RUN game

const choiceSelector = document.querySelector("#choiceSelector");
const descriptionDiv = document.querySelector("#descriptionDiv");
const playerScoreDiv = document.querySelector("#playerScore");
const computerScoreDiv = document.querySelector("#computerScore");

choiceSelector.addEventListener("click", (event) => {
    let target = event.target;
    let result

    switch(target.id) {
        case "rock":
            result = playRound("ROCK", computerChoice());
            break;
        case "paper":
            result = playRound("PAPER", computerChoice());
            break;
        case "scissors":
            result = playRound("SCISSORS", computerChoice())
            break;
    }

    descriptionDiv.textContent = result
    roundsPlayed++;

    playerScoreDiv.textContent = "Player Score: " + playerScore
    computerScoreDiv.textContent = "Computer Score: " + computerScore

    if (playerScore === 3 || computerScore === 3) {
        descriptionDiv.textContent = declareWinner();
    }
});