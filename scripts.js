function getComputerChoice(){
    rand = Math.random() 
    if(rand < 0.33 ){
        return "scissors"
    } else if(rand < 0.66 ){
        return "rock"
    } else {
        return "paper"
    }
}

function getHumanChoice(){
    return prompt("Enter your choice")
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);