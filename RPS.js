//genesis
const container = document.getElementById('container');
const resultsDiv = document.createElement('div');
const resultsText = document.createElement('span');
const choiceDiv = document.createElement('div');
const playerChoice = document.createElement('span');
const computerChoice = document.createElement('span');
const scoreDiv = document.createElement('div');
const playerScoretext = document.createElement('span');
const computerScoretext = document.createElement('span');




//Function to get computer choice
function getComputerChoice(){
    const compArray =["Rock", "Paper", "Scissors"];
    const computerHand = (compArray[(Math.floor(Math.random() * compArray.length))]);
    return computerHand;
}


let playerScore = 0;
let computerScore = 0;



function playRound(playerSelection, computerSelection) {
 
    resultsText.textContent = '';

  
    if (computerSelection === playerSelection) {
        resultsText.textContent = "It's a tie";
    } 
    else if (computerSelection== 'Rock' && playerSelection == "Paper") {
        resultsText.textContent = "You Win! Paper wins Rock"; 
        playerScore++;
    }
    
    else if (computerSelection == "Paper" && playerSelection == "Rock" ) {
        resultsText.textContent = "You Lose! Paper wins Rock"; 
        computerScore++;
    }
    
    
    else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        resultsText.textContent = "You Lose! Scissors beats Paper"; 
        computerScore++;
    } 
    
    else if (computerSelection == "Paper" && playerSelection == "Scissors") {
        resultsText.textContent = "You Win! Scissors beats Paper"; 
        playerScore++;
    } 
    
    else if (computerSelection == "Scissors" && playerSelection == "Rock") {
        resultsText.textContent = "You Win! Rock beats Scissors"; 
        playerScore++;
    } 
    
    else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        resultsText.textContent = "You Lose! Rock beats Scissors"; 
        computerScore++;
    }

    updateScore();//updates player || computer score 

    disableBtns();
}


// playRound(playerSelection, computerSelection);
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

//rock buttons prop.
rockBtn.textContent = 'Rock';
rockBtn.addEventListener('click',rockGame);

//paper buttons prop.
paperBtn.textContent = 'Paper';
paperBtn.addEventListener('click', paperGame);

//scissors button prop.
scissorsBtn.textContent = 'Scissors';
scissorsBtn.addEventListener('click', scissorsGame);


function rockGame (){
    playerSelection = 'Rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playerChoice.textContent = `Player Choose: ${playerSelection}`;
    computerChoice.textContent = `Computer Choose: ${computerSelection}`;

}

function paperGame(){
    playerSelection = 'Paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playerChoice.textContent = `Player Choose: ${playerSelection}`;
computerChoice.textContent = `Computer Choose: ${computerSelection}`;

}

function scissorsGame() {
    playerSelection = 'Scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playerChoice.textContent = `Player Choose: ${playerSelection}`;
     computerChoice.textContent = `Computer Choose: ${computerSelection}`;

}

