// A function that randomly generates "rock", "paper", or "scissors" for comp.
function getComputerChoice(){
    // Genrate random number between 0 and 1.
    rand = Math.random() 
    // Returns rock paper or scissors based based on the range of the random number.
    if(rand < 0.33 ){
        return "scissors"
    } else if(rand < 0.66 ){
        return "rock"
    } else {
        return "paper"
    }
}

// A function that prompts user to enter thier choice of "rock", "paper" or "scissors".
function getHumanChoice(){
    return prompt("Enter your choice")
}

// Declare var to track human and comp scores (amount of wins).
let humanScore = 0;
let computerScore = 0;

// Function that plays a round of RCS. Logs results in console.
function playRound(humanChoice ="rock", computerChoice="rock") {
    if(humanChoice.toLowerCase() === computerChoice.toLowerCase()){
        console.log(`Tie! ${computerChoice} is the same as ${humanChoice}!`)
    }
    else if((humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper")
        || (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock")
        || (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors")
    ){
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`)
        computerScore++
    } else{
        console.log(`You Win! ${humanChoice} beats ${computerChoice}!`)
        humanScore++
    }
}
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);