// CREATE a function called computerChoice that picks a random number between 0 and 1
// STORE in variable randNum
// MULTIPLY the number by three
// IF the number is between 0 and 1, return ROCK
// ELSE IF the number is between 1 and 2, return PAPER
// ELSE IF the number is between 2 and 3, return SCISSORS
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

// CREATE a function called playerChoice
// ASK player for input with prompt()
// STORE in variable playerChoiceVar
// TURN playerChoiceVar into all uppercase so it is case insensitive
// IF playerChoiceVar is rock paper or scissors, return playerChoiceVar
// ELSE alert the player that they didn't write a correct input and should try again
    // RUN this same function if the else is run
function playerChoice() {
    let playerChoiceVar = prompt("Rock, Paper or Scissors?").toUpperCase();
    
    if (playerChoiceVar === "ROCK" || playerChoiceVar === "PAPER" || playerChoiceVar === "SCISSORS") {
        return playerChoiceVar;
    } else {
        alert("Try writing either Rock, Paper or Scissors next time");
        return playerChoice();
    }
}

// DECLARE player's score values
// CREATE variable humanScore and set to 0
// CREATE variable computerScore and set to 0
let playerScore = 0
let computerScore = 0

// CREATE function for single round logic called playRound with two parameters
// IF playerChoice is equals computerChoice
    // RETURN "its a draw!"
// ELSE IF (playerChoice is rock and computerChoice is paper) or (playerChoice is paper and computerChoice is scissors) or etc.
    // RETURN "The computer chose computerChoice: computerChoice beats playerChoice, you lose"
    // INCREASE computerScore by 1
// ELSE IF (playerChoice is rock and computerChoice is scissors) or (playerChoice is paper and computerChoice is rock) or etc.
    // RETURN "The computer chose computerChoice: playerChoice beats computerChoice, you win!"
    // INCREASE playerScore by 1

console.log("Player: " + playerScore)
console.log("Computer: " + computerScore)

    function playRound(playerChoicePara, computerChoicePara) {
    if (playerChoicePara === computerChoicePara) {
        return "The computer chose " + computerChoicePara + ": It's a tie, let's go again!";
    } else if ((playerChoicePara === "ROCK" && computerChoicePara === "PAPER") || (playerChoicePara === "PAPER" && computerChoicePara === "SCISSORS") || (playerChoicePara === "SCISSORS" && computerChoicePara === "ROCK")) {
        computerScore++;
        return "The computer chose " + computerChoicePara + ": " + computerChoicePara + " beats " + playerChoicePara + ", you lose :(";
    } else if ((playerChoicePara === "PAPER" && computerChoicePara === "ROCK") || (playerChoicePara === "SCISSORS" && computerChoicePara === "PAPER") || (playerChoicePara === "ROCK" && computerChoicePara === "SCISSORS")) {
        playerScore++;
        return "The computer chose " + computerChoicePara + ": " + playerChoicePara + " beats " + computerChoicePara + ", you win!";
    }
}

console.log(playRound("ROCK", "PAPER"))
console.log("Player: " + playerScore)
console.log("Computer: " + computerScore)
// CREATE function into variable finishGame called playGame
// IF playerScore or computerScore is 5, return 1
// ELSE return 0

// CREATE a function called declareWinner
    // IF playerScore is greater than computerScore, return "you win!"
    // ELSE return "you lose"

// CREATE for statement, set its i=0, it's condition to be less than 5 and i to increase by one each repetition
    // RUN playRound function with playerChoice as parameter 1 and computerChoice as parameter 2

// RUN declareWinner in an alert