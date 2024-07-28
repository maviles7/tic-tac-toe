/*-------------------------------- Constants --------------------------------*/
const players = {
    '1': 'x', 
    '-1': 'o', 
    'null': ' ', 
}; 


/*---------------------------- Variables (state) ----------------------------*/
let board; /* repeset state of board */ 
let turn; /* tracks whose turn it is */ 
let winner; /* tracks game/winner */
let tie; /* tracks tie */ 


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr'); 
const messageEl = document.querySelectorAll('h2'); 

/*-------------------------------- Functions --------------------------------*/
init(); 

function init() {
    // console.log(init) - no errors yet (: 
    board = [...document.querySelectorAll('.board > div')]; 
    turn = 1; 
    winner = null; 
    // console.log(board); - can see board 
};

function updateBoard() {
    board.forEach((box) => {
        const cellElemet = document.getElementById(`${board[box]}`); 
        // console.log(cellElemet); - nothing happening but no errors 
        cellElemet.textContent = board[box];         
    });
};

function updateMessage() {
    if (winner === 'null') {
        // game in progress 
        messageEl.innerHTML = `${players[turn].toUpperCase()}'s turn`; 
    } else if (winner === 'tie') {
        messageEl.textContent = 'tis a tie.'; 
    } else {
        messageEl.innerHTML = `${players[turn].toUpperCase} wins!`;
    };
};

function render() { 
    updateBoard; 
    updateMessage; 
}

render(); 
/*----------------------------- Event Listeners -----------------------------*/



