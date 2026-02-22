const player = { symbol: "" };
const computer = { symbol: "" };
let currentTurn = player;
let mode = 'easy';

const xButton = document.getElementById('x');
const oButton = document.getElementById('o');

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', (event) => {
        markSquare(event.target.id);
    });
});

document.getElementById('modeButtons').addEventListener('click', (event) => {
    mode = event.target.id;
});

const board = ["", "", "", "", "", "", "", "", ""];

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

xButton.addEventListener('click', () => {
    player.symbol = 'X';
    computer.symbol = 'O';
    xButton.classList.add('selected');
    oButton.classList.remove('selected');
});
oButton.addEventListener('click', () => {
    player.symbol = 'O';
    computer.symbol = 'X';
    oButton.classList.add('selected');
    xButton.classList.remove('selected');
});

function markSquare(squareID) {
    if (player.symbol === "") {
        document.getElementById('chooseSymbol').innerHTML = "You must choose your weapon brave knight";
        document.getElementById('gotIt').style.display = 'inline-block';
        return;
    }
    if (board[squareID] === "") {
        board[squareID] = currentTurn.symbol;
        document.getElementById(squareID).innerHTML = currentTurn.symbol;
        const result = isWinner();
        if (result === true) {
            document.getElementById('message').innerHTML =
                currentTurn === player ? "Thou hast won!" : "The machine wins!";
            document.getElementById('restartBtn').style.display = 'inline-block';
        } else if (result === "tie") {
            document.getElementById('message').innerHTML = "A draw... the spirits are balanced.";
            document.getElementById('restartBtn').style.display = 'inline-block';
        } else {
            currentTurn = (currentTurn === player) ? computer : player;
            console.log('current turn:', currentTurn);

            if (currentTurn === computer) {
                computerMove();
            }
        }
    }
}

function isWinner() {
    for (let i = 0; i < winCombos.length; i++) {
        const combo = winCombos[i];
        const [a, b, c] = combo;
        if (board[a] === currentTurn.symbol &&
            board[b] === currentTurn.symbol &&
            board[c] === currentTurn.symbol
        ) { return true; }
    }
    return board.includes("") ? false : "tie";
}

function computerMove() {
    if (mode === 'hard') {
        for (let i = 0; i < winCombos.length; i++) {
            const combo = winCombos[i];
            let finishHim = combo.reduce((count, index) => {
                return board[index] === computer.symbol ? count + 1 : count;
            }, 0);
            if (finishHim === 2) {
                const emptySpot = combo.find(index => board[index] === "");
                if (emptySpot !== undefined) {
                    markSquare(emptySpot);
                    return;
                }
            }
        }
        for (let i = 0; i < winCombos.length; i++) {
            const combo = winCombos[i];
            let yesBlock = combo.reduce((count, index) => {
                return board[index] === player.symbol ? count + 1 : count;
            }, 0);
            if (yesBlock === 2) {
                const emptySpot = combo.find(index => board[index] === "");
                if (emptySpot !== undefined) {
                    markSquare(emptySpot);
                    return;
                }
            }
        }
    }
    const emptySpots = [0, 1, 2, 3, 4, 5, 6, 7, 8].filter(index => board[index] === "");
    const randomIndex = Math.floor(Math.random() * emptySpots.length);
    markSquare(emptySpots[randomIndex]);
};

function restartGame() {
    board.fill("");
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    document.getElementById('message').innerHTML = "";
    document.getElementById('restartBtn').style.display = 'none';
    xButton.classList.remove('selected');
    oButton.classList.remove('selected');
    currentTurn = player;
}

function disappear() {
    document.getElementById('chooseSymbol').innerHTML = "";
    document.getElementById('gotIt').style.display = 'none';
}