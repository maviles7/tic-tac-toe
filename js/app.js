/*-------------------------------- Constants --------------------------------*/
const players = {
    '1': 'x', 
    '-1': 'o', 
    'null': ' ', 
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
    square.addEventListener('click', (event) => {
        if (squareIdx === 'x' || squareIdx == 'o' || winner === true) {
            return; 
    }; 
}); 
}); 

resetBtnEl.addEventListener('click', init); 

/*----------------------------- functions -----------------------------*/
// 1. define required variable used to track state of the game (: 
// 2. store cached elements (: 
// 3. initialize game (: --> intialize function
// 4. render state of the game to user (: --> the message 
// 5. define required constants --> Q: do I need players? we used them in connect 4.
// 6. handle player clicking --> function handleClick 
// 7. create reset functionality 

init(); 

function init() {
    board = ["", "", "", "", "", "", "", "", ""]; 
    turn = 1; 
    winner = false;
    tie = false;  
    //console.log(init); 
    render(); 
}; 

function handleClick(evt) {
    placePiece(squareIdx); 
    checkWinner(); 
    checkTie(); 
    switchPlayerTurn(); 
    render(); 
}; 

function placePiece(squareIdx) {
    board[squareIdx] = turn; 
}

function checkWinner() {
    WINNING_COMBOS.forEach((combo) => {
        combo.forEach((square) => {
            if (square[0] != ' ' && square[1] === square[2] && square[0] === square[2]) {
                winner = true; 
            }; 
        }); 
    }); 
}

function checkTie() {
    if (winner === true) {
        return; 
    } else if (board[squareIdx] != '') {
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
    if (winner === false && tie === false) {
        messageEl.innerHTML = `${turn}'s turn`
    } else if (winner === false && tie === true) {
        messageEl.innerHTML = "tie."; 
    } else {
        messageEl.innerHTML =`${turn} wins.`
    }
}

function updateBoard() {
    board.forEach((square, idx) => {
        squareEls[idx].innerText = square; // squareEls is an array in cached elements 
    }); 
}