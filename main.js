let current_player;

function GameBoard() {
    let gameboard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    let render = () => {
        let container = document.querySelector('.container');
        let display = '';
        gameboard.forEach((el, i) => {

            el.forEach((el2, j) => {
                display += `
         <div class="gameboard" data-primary-index = '${i}' data-index='${j}'>${el2}</div>
         `;
            });

        });

        container.innerHTML = display;
        document.querySelectorAll('.gameboard').forEach((el) => {
            
            el.addEventListener('click', () => {
                spot(parseInt(el.getAttribute('data-index')), parseInt(el.getAttribute('data-primary-index')));
            });
        });
    }

    let spot = (index, primaryIndex) => {
        if (gameboard[primaryIndex][index] == '') {
            gameboard[primaryIndex][index] = current_player.pSymbol;
            game.alterPlayer(current_player);
            render();
        }
    }
    return {
        gameboard,
        render
    };
}


function Players(player_symbol) {

    let pSymbol = player_symbol;

    return {
        pSymbol
    }

}


function GameLogic(playerOne, playerTwo, board) {

    function play() {
        current_player = playerOne;
        board.render();
    }

    function alterPlayer(current) {
        current_player = current == playerOne ? playerTwo : playerOne;
        return current_player;
    }

    function currentPlayer() {
        return current_player;
    }

    function gameFinish() {
     
        let win = [[]]


    



    }

    return {
        play,
        gameFinish,
        alterPlayer,
        currentPlayer
    }
}

let board = GameBoard();
let playerOne = Players('x');
let playerTwo = Players('o');

let game = GameLogic(playerOne, playerTwo, board);
game.play();
// console.log(game.alterPlayer(game.currentPlayer()));