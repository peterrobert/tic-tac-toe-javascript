const player = require('../index');

const testPlayer = player;


test('it should return the player name and the player symbol', () => {
  const player1 = ['peter', 'x'];

  expect(testPlayer.Players(player1[1], player1[0])).toStrictEqual({
    pSymbol: 'x',
    name: 'peter',
  });
});
