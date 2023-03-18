let gameBoard = [
    ["","",""],
    ["","",""],
    ["","",""]
]
let currentPlayer = 'X'
let noofplays = 0;
let gameOver = false;


function playerMove(cell){
    if(gameOver){
        document.getElementById('next-player').innerHTML = "Game Over!";
        return;
    }
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;
    if(gameBoard[row][col] === ''){
        gameBoard[row][col] = currentPlayer;
        cell.innerHTML = currentPlayer;
        noofplays++;
    
    if(checkWinner()){
        document.getElementById('result').innerHTML = `Player '${currentPlayer}' won!`;
        gameOver= true;
    }
    else if(checkTie()){
        document.getElementById('result').innerHTML = `Here is Tie`;
        gameOver = true;
    }
    
    else{
        if(currentPlayer === "X"){
            currentPlayer = 'O'
            cell.style.color = 'green'
         }
         else{currentPlayer= 'X'
             cell.style.color='red'
     }

    
    document.getElementById('next-player').innerHTML = `Player ${currentPlayer}'s turn`
    }
}
}


function checkWinner() {
//   console.log('find')
    //rows
    for(let i = 0; i<3; i++){
        if(gameBoard[i][0] === currentPlayer 
            && gameBoard[i][1] === currentPlayer 
            && gameBoard[i][2] === currentPlayer) {
                return true;
            }
    }

    //columns

    for(let i = 0; i<3; i++){
        if(gameBoard[0][i] === currentPlayer 
            && gameBoard[1][i] === currentPlayer 
            && gameBoard[2][i] === currentPlayer) {
                return true;
            }
    }

    //diagonal 1

    if(gameBoard[0][0] === currentPlayer 
        && gameBoard[1][1] === currentPlayer 
        && gameBoard[2][2] === currentPlayer) {
            return true;
        }

    //diagonal 2

    if(gameBoard[0][2] === currentPlayer 
        && gameBoard[1][1] === currentPlayer 
        && gameBoard[2][0] === currentPlayer) {
            return true;
        }

}
function checkTie(){
   if(noofplays == 9){
    return true;
   }
}

function reset(){
    gameBoard = [
        ["","",""],
        ["","",""],
        ["","",""]
    ]
    
    currentPlayer = 'X';
    document.getElementById('next-player').innerHTML = "Click any cell to start the game";
    document.getElementById('result').innerHTML = "";
    noOfPlays = 0;
    gameOver = false;

    let cells = document.getElementsByClassName('cell');
    for(let i = 0; i<cells.length; i++){
        cells[i].innerHTML = "";
    }
}
