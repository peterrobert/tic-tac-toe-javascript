let current_player;
function GameBoard() {
   let gameboard  = ['','','','','','','','',''];
   function spot(index) {
      if(gameboard[parseInt(index)] == ''){
         gameboard[parseInt(index)] = current_player.pSymbol;
         game.alterPlayer(current_player);
         render();
      }
   }
   let render = () =>  {
      let container = document.querySelector('.container');
      let display = '';
      gameboard.forEach((el, i)=>{
         display += `
         <div class="gameboard" data-index='${i}'>${el}</div>
         `;
      });
      container.innerHTML = display;
      document.querySelectorAll('.gameboard').forEach((el)=>{
         el.addEventListener('click', ()=> {
            spot(el.getAttribute('data-index'));
         });
      });
   }

    return {gameboard, render};
}


function Players(player_symbol) {

   let pSymbol = player_symbol;

   return{pSymbol}
      
}


function GameLogic(playerOne, playerTwo, board) {
    
   function play() {
      current_player = playerOne;
      board.render();
   }

   function  alterPlayer(current) {
      current_player = current == playerOne ? playerTwo : playerOne;
      return current_player;
   }

   function  currentPlayer(){
      return current_player;
   }

   function gameFinish() {
       
   }

   return{play , gameFinish, alterPlayer, currentPlayer}
}

let board = GameBoard();
let playerOne = Players('x');
let playerTwo = Players('o');

let game = GameLogic(playerOne, playerTwo,board);
game.play();
// console.log(game.alterPlayer(game.currentPlayer()));