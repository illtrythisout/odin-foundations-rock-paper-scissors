// CREATE a function called computerChoice that picks a random number between 0 and 1
// STORE in variable randNum
// MULTIPLY the number by three
// IF the number is between 0 and 1, return 1 (1 will represent rock)
// ELSE IF the number is between 1 and 2, return 2 (2 will represent paper)
// ELSE IF the number is between 2 and 3, return 3 (3 will represent scissors)
function computerChoice() {
    let randNum = Math.random();
    randNum = randNum * 3;

    if (randNum < 1 && randNum >= 0) {
        return 1;
    } else if (randNum < 2 && randNum >= 1) {
        return 2;
    } else {
        return 3;
    }
}

// CREATE a function called playerChoice
// ASK player for input with prompt()
// STORE in variable playerChoiceVar
// TURN playerChoiceVar into all uppercase so it is case insensitive
// IF playerChoiceVar is ROCK then return 1
// ELSE IF playerChoice is PAPER then return 2
// ELSE IF playerChoice is SCISSORS then return 3
// ELSE alert the player that they didn't write a correct input and should try again
    // RUN this same function if the else is run
function playerChoice() {
    let playerChoiceVar = prompt("Rock, Paper or Scissors?").toUpperCase();
    
    if (playerChoiceVar === "ROCK") {
        return 1;
    } else if (playerChoiceVar === "PAPER") {
        return 2;
    } else if (playerChoiceVar === "SCISSORS") {
        return 3;
    } else {
        alert("Try writing either Rock, Paper or Scissors next time");
        return playerChoice();
    }
}


// DECLARE player's score values
// CREATE variable humanScore and set to 0
// CREATE variable computerScore and set to 0
let humanScore = 0
let computerScore = 0

// CREATE function for single round logic called playRound with two parameters
// SET parameters to computer and players choice
// IF playerChoice is 1 and computerChoice is 2
    // RETURN "you lost, paper beats rock"
    // INCREASE computerScore by 1
// ELSE IF playerChoice is 3 and computerChoice is 2
    // RETURN "you win, scissors beats paper"
    // INCREASE playerScore by 1
// And so on for other scenarios

// CREATE function into variable finishGame called playGame
// IF humanScore or computerScore is 5, return 1
// ELSE return 0

// CREATE a function called declareWinner
    // IF humanScore is greater than computerScore, return "you win!"
    // ELSE return "you lose"

// CREATE for statement, set its variable to finishGame, it's condition to be less than 1
    // RUN playRound function with playerChoice as parameter 1 and computerChoice as parameter 2

// RUN declareWinner in an alert