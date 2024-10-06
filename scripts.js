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
    const resultsMenu = document.querySelector(".results");
    const finalResult = document.createElement("h2");

    // Logs final winner based on score.
    if(humanScore >= 5){
        finalResult.textContent = `Final Winner is the human! ${humanScore} : ${computerScore}`;
        resultsMenu.appendChild(finalResult);
        return finalResult;
        
    }else if (computerScore >= 5){
        finalResult.textContent = `Final Winner is the computer! ${humanScore} : ${computerScore}`;
        resultsMenu.appendChild(finalResult);
        return finalResult;
    }

    if(humanChoice.toLowerCase() === computerChoice.toLowerCase()){
        const tieResult = document.createElement("p");
        tieResult.textContent = `Tie! ${humanChoice} is the same as ${computerChoice}! 
            ${humanScore} : ${computerScore}`;
        resultsMenu.appendChild(tieResult);
    }
    else if((humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper")
        || (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock")
        || (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors")
    ){
        computerScore++;
        const loseResult = document.createElement("p");
        loseResult.textContent = `You Lose! ${computerChoice} beats ${humanChoice}! 
            ${humanScore} : ${computerScore}`;
        resultsMenu.appendChild(loseResult);

    } else{
        humanScore++;
        const winResult = document.createElement("p");
        winResult.textContent = `You Win! ${humanChoice} beats ${computerChoice}! 
            ${humanScore} : ${computerScore}`;
        resultsMenu.appendChild(winResult);
    }
}

// Function that plays 5 rounds of RCS (by calling playround()).
function playGame(){
    const menu = document.querySelector(".menu");
    const buttons = document.querySelectorAll("button");
    let finalResult = 0;

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playRound(button.textContent, getComputerChoice());
        });
    });
}

playGame()


  