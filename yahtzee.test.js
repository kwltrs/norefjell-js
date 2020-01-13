const yahtzee = require('./yahtzee');

test('Three-Of-A-Kind', () => {
    expect( yahtzee.sumThreeOfAKind([1, 1, 2, 2, 3]) ).toBe(0);
});
