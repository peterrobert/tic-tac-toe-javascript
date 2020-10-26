const board = require('../index');
const testBoard = board.GameBoard()


test('it should return true if the board is full and false if the board is not full', () => {

    const gameboard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
    
      expect(testBoard.boardFull(gameboard)).toBe(false);

});


test('it should return true if the board is full and false if the board is not full', () => {

    const gameboard = [
        ['9', '1', '6'],
        ['2', '3', '7'],
        ['8', '4', '5'],
      ];
    
      expect(testBoard.boardFull(gameboard)).toBe(true);

});



