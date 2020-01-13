const yahtzee = require('./yahtzee');

test('Chance', () => {
    expect( yahtzee.sumChance([1, 1, 1, 1, 1]) ).toBe(5);
    expect( yahtzee.sumChance([1, 2, 3, 4, 5]) ).toBe(15);
});


test('Three-Of-A-Kind', () => {
    expect( yahtzee.sumThreeOfAKind([1, 2, 3, 4, 5]) ).toBe(0);
    expect( yahtzee.sumThreeOfAKind([1, 1, 1, 2, 3]) ).toBe(8);
    expect( yahtzee.sumThreeOfAKind([1, 2, 1, 3, 1]) ).toBe(8);
    expect( yahtzee.sumThreeOfAKind([1, 1, 1, 1, 2]) ).toBe(6);
});

test('Four-Of-A-Kind', () => {
    expect( yahtzee.sumFourOfAKind([1, 2, 3, 4, 5]) ).toBe(0);
    expect( yahtzee.sumFourOfAKind([1, 1, 1, 1, 3]) ).toBe(7);
    expect( yahtzee.sumFourOfAKind([1, 1, 1, 1, 1]) ).toBe(5);
});

test('Large Straight', () => {
    expect( yahtzee.sumLargeStraight([1, 1, 1, 1, 1]) ).toBe(0);
    expect( yahtzee.sumLargeStraight([1, 2, 3, 4, 5]) ).toBe(40);
    expect( yahtzee.sumLargeStraight([2, 3, 4, 5, 1]) ).toBe(40);
});

test('Small Straight', () => {
    expect( yahtzee.sumSmallStraight([1, 1, 1, 1, 1]) ).toBe(0);
    expect( yahtzee.sumSmallStraight([1, 2, 3, 4, 5]) ).toBe(30);
    expect( yahtzee.sumSmallStraight([1, 1, 2, 3, 4]) ).toBe(30);
    expect( yahtzee.sumSmallStraight([2, 3, 4, 5, 5]) ).toBe(30);
    expect( yahtzee.sumSmallStraight([3, 4, 5, 6, 6]) ).toBe(30);
    expect( yahtzee.sumSmallStraight([3, 4, 5, 6, 4]) ).toBe(30);
});

test('Yahtzee', () => {
    expect( yahtzee.sumYahtzee([1, 1, 3, 1, 3]) ).toBe(0);
    expect( yahtzee.sumYahtzee([1, 1, 1, 1, 1]) ).toBe(50);
    expect( yahtzee.sumYahtzee([6, 6, 6, 6, 6]) ).toBe(50);
});

test('Full House', () => {
    expect( yahtzee.sumFullHouse([1, 1, 1, 1, 1]) ).toBe(0);
    expect( yahtzee.sumFullHouse([1, 1, 1, 2, 2]) ).toBe(25);
    expect( yahtzee.sumFullHouse([1, 1, 2, 2, 3]) ).toBe(0);
});
