const playerChoiceInput = document.querySelector('#playerChoice');
const playGameButton = document.querySelector('button');

playGameButton.addEventListener("click", () => {
    const playerChoice = playerChoiceInput.value.toLowerCase();
    if(playerChoice !== 'x' && playerChoice !== 'o'){
        console.log("Invalid Selection.");
    }
    else{
        choosePosition();
    }
});

// opponentSelection = prompt("Is your opponent a human or a robot?").toLowerCase();
// robotChoice = ['00', '01', '02', '10', '11', '12', '20', '21', '22'];
gameLoop = true;

const gameBoard = [['-','-','-'],['-','-','-'],['-','-','-']];

function choosePosition(){

    letterPosition = prompt("Its 'X's turn. Choose your position: ");
    gameBoard[Math.trunc(letterPosition/10)][letterPosition%10] = 'X';
    
    for (let row of gameBoard) {
        const rowString = row.join('|');
        console.log(rowString);
    }

    letterPosition = prompt("Its 'O's turn. Choose your position: ");
    gameBoard[Math.trunc(letterPosition/10)][letterPosition%10] = 'O';
    console.log(gameBoard);

    for (let row of gameBoard) {
        const rowString = row.join('|');
        console.log(rowString);
    }
}






