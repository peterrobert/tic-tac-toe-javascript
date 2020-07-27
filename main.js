let current_player;

function GameBoard() {
    let gameboard = ['', '', '', '', '', '', '', '', ''];

    let render = () => {
        let container = document.querySelector('.container');
        let display = '';
        gameboard.forEach((el, i) => {
            display += `
         <div class="gameboard" data-index='${i}'>${el}</div>
         `;
        });
        container.innerHTML = display;
        document.querySelectorAll('.gameboard').forEach((el) => {
            el.addEventListener('click', () => {
                spot(el.getAttribute('data-index'));
            });
        });
    }

    let spot = (index) => {
        if (gameboard[parseInt(index)] == '') {
            gameboard[parseInt(index)] = current_player.pSymbol;
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

        let win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ];

        let playerOneValues = [];
        let playerTwoValues = [];
        let winner = ''

        if (!board.gameboard.some((el) => {
                el == ''
            })) {


            board.gameboard.forEach((el, i) => {

                if (el == playerOne.pSymbol) {
                    playerOneValues.push(i)
                } else {
                    playerTwoValues.push(i)
                }

            });


            win.forEach((el, i) => {

                // if (el.join('').includes(playerOneValues.join(''))) {
                //  winner = "player one"
                 
                //  return winner
                    
                // } else if (el.join('').includes(playerTwoValues.join(''))) {
                //     winner = "player two"

                //   return winner
                // }
                console.log(el.join('').includes(playerOneValues.join('')))

            })

            console.log(winner)

        }




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