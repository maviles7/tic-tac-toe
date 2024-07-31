/*-------------------------------- Constants --------------------------------*/
const PLAYERS = {
    '1': 'x', 
    '-1': 'o', 
    '': ' ', 
}; 

const WINNING_COMBOS = [ // "x" or "o" will be in those boxes for TTT
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]; 


/*---------------------------- Variables (state) ----------------------------*/
let board; /* repeset state of board, [0] = top L & [8] = bottom R */ 
let turn; /* tracks whose turn it is */ 
let winner;  /* tracks game/winner */
let tie;  /* tracks tie */ 


/*------------------------ Cached Element References ------------------------*/
 const squareEls = [...document.querySelectorAll('.sqr')]; // created array to use in updateBoard!!!
 const messageEl = document.querySelector('h2'); 
 const boardEl = document.querySelector('.board'); 
 const resetBtnEl = document.querySelector('button'); 

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square) => {
    square.addEventListener('click', handleClick); 
}); 

resetBtnEl.addEventListener('click', init); 

/*----------------------------- functions -----------------------------*/
// 1. define required variable used to track state of the game (: 
// 2. store cached elements (: 
// 3. initialize game (: --> intialize function (:
// 4. render state of the game to user (: --> the message  (:
// 5. define required constants (: 
// 6. handle player clicking (:
// 7. create reset functionality (: 

init(); 

function init() {
    board = ["", "", "", "", "", "", "", "", ""]; 
    turn = 1; 
    winner = false;
    tie = false;  
    //console.log(init); 
    render(); 
}; 

function handleClick(event) {
    placePiece(event.target.id); 
    checkWinner(); 
    checkTie(event.target.id);  
    switchPlayerTurn(); 
    render();
    
    
}; 

function placePiece(squareIdx) {
    board[squareIdx] = turn; 
}

function checkWinner() {
    for (let winArr of WINNING_COMBOS) {
        if(Math.abs(board[winArr[0]] + board[winArr[1]] + board[winArr[2]]) === 3) {
            winner = true; 
        }
    }
}


function checkTie(squareIdx) {
    if (winner === true) {
        return; 
    } else if (board.includes('')) {
        tie = false; 
    } else {
        tie = true; 
    }; 
}

function switchPlayerTurn() {
    if (winner === true) {
        return; 
    } else {
        turn *= -1; 
    }
}

function render() {
    updateBoard(); 
    updateMessage(); 
}; 

function updateMessage() {
    console.log(winner, tie); 
    if (winner === false && tie === false) {
        messageEl.innerHTML = `${PLAYERS[turn]}'s turn`
    } else if (winner === false && tie === true) {
        messageEl.innerHTML = "tie."; 
    } else {
        messageEl.innerHTML =`${PLAYERS[turn]} wins.`
    }
}

function updateBoard() {
    board.forEach((square, idx) => {
        squareEls[idx].innerText = PLAYERS[square]; // squareEls is an array in cached elements 
    }); 
}

