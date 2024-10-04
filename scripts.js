

function getComputerChoice(){

    rand = Math.random() 
    if(rand < 0.33 ){
        console.log(rand)
        return "scissors"
    } else if(rand < 0.66 ){
        console.log(rand)
        return "rock"
    } else {
        console.log(rand)
        return "paper"
    }
}