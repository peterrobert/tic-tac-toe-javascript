let current_player;

function GameBoard() {
   let gameboard = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
   ];

   function boardFull() {
      let isFull = false;
      if(gameboard[0].includes('') || gameboard[1].includes('') || gameboard[2].includes('')){
         isFull = false;
      }else {
         isFull = true;
      }
      return isFull
   }

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
      if(winner == null && !boardFull()){
         document.querySelector('#current-player').innerHTML = `It is ${current_player.pSymbol}'s turn!`
      }else if(winner == null && boardFull()){
         document.querySelector('#current-player').innerHTML = `It's a tie!`
      }else if(winner != null) {
         document.querySelector('#current-player').innerHTML = `The Winner is ${winner.pSymbol}!`
      }

      container.innerHTML = display;
      document.querySelectorAll('.gameboard').forEach((el) => {

         el.addEventListener('click', () => {
            spot(parseInt(el.getAttribute('data-index')), parseInt(el.getAttribute('data-primary-index')));
         });
      });
   }

   let spot = (index, primaryIndex) => {
      if (gameboard[primaryIndex][index] == '' && winner == null) {
         gameboard[primaryIndex][index] = current_player.pSymbol;
         game.checkGame();
         // if(winner == null && board.isFull())
         game.alterPlayer(current_player);
         render();
      }
   }
   return {
      gameboard,
      boardFull,
      render
   };
}


function Players(player_symbol) {

   let pSymbol = player_symbol;

   return {
      pSymbol
   }

}

function allThreeEqual(a, b, c) {
   return a == b && b == c && a != '';
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

   function assignWinner(pSign) {
      winner = pSign === 'x' ? playerOne : playerTwo;
   }

   function checkGame() {

      // let win = [
      //    [0, 1, 2],
      //    [3, 4, 5],
      //    [6, 7, 8],
      //    [0, 4, 8],
      //    [2, 4, 6],
      //    [0, 3, 6],
      //    [1, 4, 7],
      //    [2, 5, 8]
      // ];
      gameboard = board.gameboard;
      // horizontal
      for (let i = 0; i < 3; i++) {
         if (allThreeEqual(gameboard[i][0], gameboard[i][1], gameboard[i][2])) {
           assignWinner(gameboard[i][0])
         }
      }

      // Vertical
      for (let i = 0; i < 3; i++) {
         if (allThreeEqual(gameboard[0][i], gameboard[1][i], gameboard[2][i])) {
            assignWinner(gameboard[0][i]);
         }
      }

      // Diagonal
      if (allThreeEqual(gameboard[0][0], gameboard[1][1], gameboard[2][2])) {
         assignWinner(gameboard[0][0]);
      }else if(allThreeEqual(gameboard[0][2], gameboard[1][1], gameboard[2][0])) {
         assignWinner(gameboard[0][2]);
      }

      // let xIndexs = [];
      // let oIndexs = [];
      // board.gameboard.forEach((element, i) => {
      //    xIndexs[i] = [];
      //    oIndexs[i] = [];
      //    element.forEach((el, j) => {
      //       if (el === 'x') {
      //          xIndexs[i].push(j);
      //       } else if (el === 'o') {
      //          oIndexs[i].push(j);
      //       }
      //    });
      // });
      // xIndexs.forEach((element)=> {
      //    win.forEach((el)=> {
      //       if(element[0] === el[0] && element[1] === el[1] && element[2] === el[2]) {
      //          winsGame = true;
      //          winner = playerOne;
      //       }
      //    })
      // })
      // oIndexs.forEach((element)=> {
      //    win.forEach((el)=> {
      //       if(element[0] === el[0] && element[1] === el[1] && element[2] === el[2]) {
      //          winsGame = true;
      //          winner = playerTwo;
      //       }
      //    })
      // })
      // console.log(oIndexs)


   }
   return {
      play,
      checkGame,
      alterPlayer,
      currentPlayer
   }
}
let winsGame = false;
let winner = null;
let board = GameBoard();
let playerOne = Players('x');
let playerTwo = Players('o');

let game = GameLogic(playerOne, playerTwo, board);
game.play();
// console.log(game.alterPlayer(game.currentPlayer()));