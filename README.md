# tictactoe-top
A tic-tac-toe game made using HTML, CSS and JavaScript

Live Demo


Blueprint
A. Functionality

1. Player Selection
a. Greet the player with a simple 'console.log' statement
b. Prompt the user to choose between 'X' and 'O'. Save their choice in a 'playerSelection' variable
c. Also ask the player if their opponent is a human or a bot. Save the choice in the 'opponentSelection' variable

2. Board Creation
a. Function 'createBoard' will be used to create the board. The board will be represented by a 2 dimensional array as it extends across the X and Y axis

3. GamePlay
a. If the player has chosen 'X' their turn would be first. In this case, prompt the player to choose where they would like to place the 'X'. Give an example to the player as to how to choose the position. For example: if the player wishes to place their piece in the middle of the board then the position would be 'row: 1 and column: 1'. The player can simply type '11' to place it there
b. Once the player has chosen their position, check if any other piece exists in the chosen position. The checking can begin from turn 2 onwards as all the positions are empty in the first turn. If a piece exists, notify the player that a piece already exists and ask them to try again
c. Three 'X's or 'O's across a straight line of diagonally represents the winner. This can be checked from turn 3 onwards as at least 3 turns would be required to win any round