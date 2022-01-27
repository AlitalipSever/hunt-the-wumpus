const game = require('./game')

test('Show rooms', () => {
    expect(game.getRandomRooms()).toHaveLength(6)
})