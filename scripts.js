

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
    let humanChoice = prompt("Enter your choice")
    return (humanChoice === "scissors" || humanChoice ==="rock" 
        ||humanChoice === "paper") ? humanChoice : "No"
}