let current_player;

function GameBoard() {
   let gameboard = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
   ];

   function boardFull() {
      let isFull = true;
      gameboard.forEach((el) => {
         el.forEach((el2)=>  {
            if(el2 ===''){
               isFull = false
               return
            }else {
               isFull = true;
               return
            }
         })
      })
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
         game.gameFinish();
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

      let xIndexs = [];
      let oIndexs = [];
      board.gameboard.forEach((element, i) => {
         xIndexs[i] = [];
         oIndexs[i] = [];
         element.forEach((el, j) => {
            if (el === 'x') {
               xIndexs[i].push(j);
            } else if (el === 'o') {
               oIndexs[i].push(j);
            }
         });
      });
      xIndexs.forEach((element)=> {
         win.forEach((el)=> {
            if(element[0] === el[0] && element[1] === el[1] && element[2] === el[2]) {
               winsGame = true
            }
         })
      })
      oIndexs.forEach((element)=> {
         win.forEach((el)=> {
            if(element[0] === el[0] && element[1] === el[1] && element[2] === el[2]) {
               winsGame = true
            }
         })
      })


   }
      return {
         play,
         gameFinish,
         alterPlayer,
         currentPlayer
      }
}
let winsGame = false;
let board = GameBoard();
let playerOne = Players('x');
let playerTwo = Players('o');

let game = GameLogic(playerOne, playerTwo, board);
game.play();
// console.log(game.alterPlayer(game.currentPlayer()));