const GameLogic = require('../index');

const testGame = GameLogic.GameLogic();


test('it should alternate between the current players', () => {
  const playerone = 'john';
  const playertwo = 'peter';

  expect(testGame.alterPlayer(playerone, playertwo, playerone)).toBe(playertwo);
});
