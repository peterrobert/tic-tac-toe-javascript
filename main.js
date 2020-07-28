let currentPlayer;
let winner = null;

function GameBoard() {
  const gameboard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  function boardFull() {
    let isFull = false;
    if (gameboard[0].includes('') || gameboard[1].includes('') || gameboard[2].includes('')) {
      isFull = false;
    } else {
      isFull = true;
    }
    return isFull;
  }

  const render = () => {
    const container = document.querySelector('.container');
    let display = '';
    gameboard.forEach((el, i) => {
      el.forEach((el2, j) => {
        display += `
         <div class="gameboard" data-primary-index = '${i}' data-index='${j}'>${el2}</div>
         `;
      });
    });
    if (winner == null && !boardFull()) {
      document.querySelector('#current-player').innerHTML = `It is ${currentPlayer.name}'s ${currentPlayer.pSymbol} turn! `;
    } else if (winner == null && boardFull()) {
      document.querySelector('#current-player').innerHTML = 'It\'s a tie!';
    } else if (winner != null) {
      document.querySelector('#current-player').innerHTML = `The Winner is ${winner.name}! ${winner.pSymbol}`;
    }

    container.innerHTML = display;
    const spot = (index, primaryIndex) => {
      if (gameboard[primaryIndex][index] === '' && winner === null) {
        gameboard[primaryIndex][index] = currentPlayer.pSymbol;
        // eslint-disable-next-line no-use-before-define
        game.checkGame();
        // eslint-disable-next-line no-use-before-define
        game.alterPlayer(currentPlayer);
        render();
      }
    };
    document.querySelectorAll('.gameboard').forEach((el) => {
      el.addEventListener('click', () => {
        spot(parseInt(el.getAttribute('data-index'), 10), parseInt(el.getAttribute('data-primary-index'), 10));
      });
    });
  };

  return {
    gameboard,
    boardFull,
    render,
  };
}


function Players(playerSymbol, anoName = 'Player') {
  const pSymbol = playerSymbol;
  const name = anoName;


  return {
    pSymbol,
    name,
  };
}

let board = GameBoard();
let playerOne = Players('x');
let playerTwo = Players('o');

function allThreeEqual(a, b, c) {
  return a === b && b === c && a !== '';
}


function GameLogic(playerOne, playerTwo, board) {
  function play() {
    currentPlayer = playerOne;
    board.render();
  }

  function alterPlayer(current) {
    currentPlayer = current === playerOne ? playerTwo : playerOne;
    return currentPlayer;
  }

  //   function currentPlayerF() {
  //     return currentPlayer;
  //   }

  function assignWinner(pSign) {
    winner = pSign === 'x' ? playerOne : playerTwo;
  }

  function checkGame() {
    const { gameboard } = board;
    // horizontal
    for (let i = 0; i < 3; i += 1) {
      if (allThreeEqual(gameboard[i][0], gameboard[i][1], gameboard[i][2])) {
        assignWinner(gameboard[i][0]);
      }
    }

    // Vertical
    for (let i = 0; i < 3; i += 1) {
      if (allThreeEqual(gameboard[0][i], gameboard[1][i], gameboard[2][i])) {
        assignWinner(gameboard[0][i]);
      }
    }

    // Diagonal
    if (allThreeEqual(gameboard[0][0], gameboard[1][1], gameboard[2][2])) {
      assignWinner(gameboard[0][0]);
    } else if (allThreeEqual(gameboard[0][2], gameboard[1][1], gameboard[2][0])) {
      assignWinner(gameboard[0][2]);
    }
  }
  return {
    play,
    checkGame,
    alterPlayer,
    currentPlayer,
  };
}

let game = GameLogic(playerOne, playerTwo, board);
window.onload = () => {
  document.getElementById('start_reset_button').value = 'start';
  document.getElementById('start_reset_button').addEventListener('click', (ev) => {
    ev.preventDefault();
    if (document.getElementById('start_reset_button').value === 'start') {
      game.play();
      playerOne.name = document.getElementById('onename').value === '' ? 'Player One' : document.getElementById('onename').value;
      playerTwo.name = document.getElementById('twoname').value === '' ? 'Player Two' : document.getElementById('twoname').value;

      document.getElementById('labels').style.display = 'none';


      document.getElementById('start_reset_button').value = 'reset';
    } else {
      winner = null;
      board = GameBoard();
      playerOne = Players('x', playerOne.name);
      playerTwo = Players('o', playerTwo.name);
      currentPlayer = playerOne;
      game = GameLogic(playerOne, playerTwo, board);
    }

    board.render();
  });
};