// A function that randomly generates "rock", "paper", or "scissors" for comp.
function getComputerChoice(){
    // Genrate random number between 0 and 1.
    rand = Math.random() ;
    // Returns rock paper or scissors based based on the range of the random number.
    if(rand < 0.33 ){
        return "scissors";
    } else if(rand < 0.66 ){
        return "rock";
    } else {
        return "paper";
    }
}

// A function that prompts user to enter thier choice of "rock", "paper" or "scissors".
function getHumanChoice(){
    return prompt("Enter your choice");
}

// Declare var to track human and comp scores (amount of wins).
let humanScore = 0;
let computerScore = 0;

// Function that plays a round of RCS. Logs results in console and increments score based on winner.
function playRound(humanChoice, computerChoice) {
    
    if(humanChoice.toLowerCase() === computerChoice.toLowerCase()){
        //console.log(`Tie! ${computerChoice} is the same as ${humanChoice}!`);
    }
    else if((humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper")
        || (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock")
        || (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors")
    ){
        //console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
        //console.log(`Your Score: ${humanScore}, Comp Score: ${computerScore}`)
    } else{
        //console.log(`You Win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
        //console.log(`Your Score: ${humanScore}, Comp Score: ${computerScore}`)
    }
}

// Function that plays 5 rounds of RCS (by calling playround()).
function playGame(){
    const menu = document.querySelector(".menu");
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        
        button.addEventListener("click", () => {
            playRound(button.textContent, getComputerChoice());
        });
    });
    
  
    /*menu.addEventListener("click", (event) =>{
        let button = event.target;

        const computerChoice =  getComputerChoice()
        const humanChoice = button.textContent;

        switch(button.id) {
            case 'rockBtn':
                playRound(humanChoice, computerChoice);
                break;
            case 'paperBtn':
                playRound(humanChoice, computerChoice);
                break;
            case 'scissorBtn':
                playRound(humanChoice, computerChoice);
                break;
        }
    });*/

    // Logs final winner based on score.
    console.log((humanScore > computerScore) ? console.log(`You win!`):console.log(`You Lose!`))
}

playGame()


  