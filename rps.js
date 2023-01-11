function getComputerChoice(){ // Sets up the computer's choice.
    let computerChoice = Math.floor(Math.random() * 3); // Gets a random value between 0 - 2.
    let textComputerChoice = "";

    if (computerChoice == 0){ // Depending on the response, it picks the choice.
        textComputerChoice = "Rock";
    } else if (computerChoice == 1){
        textComputerChoice = "Paper";
    } else{
        textComputerChoice = "Scissors";
    }

    return textComputerChoice;
}

function playRound(playerSelection, computerSelection) {
    let localPlayerSelection = playerSelection.toLowerCase();
    let localcomputerSelection = computerSelection.toLowerCase();
    let localGameReturn = "";

    if(localPlayerSelection == "rock"){ // This is a terrible brute-force method, but it works well enough for now. Maybe clean up one day?
        if(localcomputerSelection == "rock"){
            localGameReturn = "It's a tie!";
        }else if(localcomputerSelection == "paper"){
            localGameReturn = "You Lose!";
        }else{
            localGameReturn = "You Win!";
        }
    }else if(localPlayerSelection == "paper"){
        if(localcomputerSelection == "paper"){
            localGameReturn = "It's a tie!";
        }else if(localcomputerSelection == "scissors"){
            localGameReturn = "You Lose!";
        }else{
            localGameReturn = "You Win!";
        }

    }else{ // This is Scissors.
        if(localcomputerSelection == "scissors"){
            localGameReturn = "It's a tie!";
        }else if(localcomputerSelection == "rock"){
            localGameReturn = "You Lose!";
        }else{
            localGameReturn = "You Win!";
        }
    }

    return localGameReturn;
}

function game(){
    let playerWins;
    let computerLose;

    for (let i = 0; i < 5; i++) {
        let playerSelection;

        while(playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors"){
            playerSelection = prompt("Rock, Paper, or Scissors?")
            
        }

        const computerSelection = getComputerChoice();

        let gameResult = playRound(playerSelection, computerSelection);

        if (gameResult == "You Win!"){
            playerWins++;
        }else{
            computerLose++;
        }

        alert(gameResult);
    }   

    if(playerWins > computerLose){
        alert("Congrats! You Win!");
    }else{
        alert("Sorry, You Lose!");
    }
}