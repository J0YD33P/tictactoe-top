letterSelection = prompt("Welcome to TicTacToe! Choose between 'X' and 'O'").toLowerCase();
// opponentSelection = prompt("Is your opponent a human or a robot?").toLowerCase();
gameLoop = true;

const gameBoard = [['-','-','-'],['-','-','-'],['-','-','-']];

function choosePosition(player){
    if(player === 'x'){
        letterPosition = prompt("Its 'X's turn. Choose your position: ");
        gameBoard[Math.trunc(letterPosition/10)][letterPosition%10] = 'X';
    }
    else{
        letterPosition = prompt("Its 'O's turn. Choose your position: ");
        gameBoard[Math.trunc(letterPosition/10)][letterPosition%10] = 'O';
    }

    for (let row of gameBoard) {
        const rowString = row.join('|');
        console.log(rowString);
    }
}

while(gameLoop){
    if(letterSelection !== 'x' && letterSelection !== 'o'){
        console.log("Invalid Selection.");
    }
    else if(letterSelection === 'x'){
        choosePosition('x');
    }
    else{
        choosePosition('o');
    }
}



