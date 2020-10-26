const GameLogic = require('../index');
const testGame = GameLogic.GameLogic();


test('it should alternate between the current players', () => {
  
    let playerone = 'john';
    let playertwo = 'peter';

    expect(testGame.alterPlayer(playerone, playertwo, playerone)).toBe(playertwo);
  
});

