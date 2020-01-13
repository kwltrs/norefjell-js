const sumAllDice = dice => dice.reduce((acc, d) => acc + d);
const diffs = arr => arr.reduce((acc, d, i) => (i === arr.length - 1) ? acc : acc.concat([arr[i + 1] - d]), []);

/**
 * Three-Of-A-Kind: At least three dice same.
 *
 * @param {int[]} dice  five integers from one to six.
 * @return {int} sum of all dice if at least three dice are the same, or 0 otherwise.
 */
module.exports.sumThreeOfAKind = dice => dice.sort().reduce((acc, d, i, arr) => {
    if (d === arr[i+1] && d === arr[i+2]) {
        return sumAllDice(dice);
    }
    return acc;
}, 0);


/**
 * Four-Of-A-Kind: At least four dice same.
 *
 * @param {int[]} dice  five integers from one to six.
 * @return {int} sum of all dice if at least four dice are the same, or 0 otherwise.
 */
module.exports.sumFourOfAKind = dice => dice.sort().reduce((acc, d) => {
    if (dice.filter(c => d === c).length > 3) {
        return sumAllDice(dice);
    }
    return acc;
}, 0);


/**
 * Full House: Three of one number and two of another.
 *
 * @param {int[]} dice  five integers from one to six.
 * @return {int} 25 if full house, 0 otherwise.
 */
module.exports.sumFullHouse = dice => {
    const counts = dice.sort().map(d => dice.filter(dd => d === dd).length);
    return counts.includes(2) && counts.includes(3) ? 25 : 0;
};


/**
 * Small Straight: Four sequential dice.
 *
 * @param {int[]} dice  five integers from one to six.
 * @return {int} 30 if small straight, 0 otherwise.
 */
module.exports.sumSmallStraight = dice => diffs(dice.sort()).filter(i => i === 1).length > 2 ? 30 : 0;


/**
 * Large Straight: Five sequential dice.
 *
 * @param {int[]} dice  five integers from one to six.
 * @return {int} 40 if large straight, 0 otherwise.
 */
module.exports.sumLargeStraight = dice => dice.sort().reduce(
    (acc, d, i) => acc && d === i+1, true) ? 40 : 0;


/**
 * Yahtzee: All five dice the same
 *
 * @param {int[]} dice  five integers from one to six.
 * @return {int} 50 if alle dice are the same, 0 otherwise.
 */
module.exports.sumYahtzee = dice => dice.filter(d => d === dice[0]).length === 5 ? 50 : 0;


/**
 * Chance: Any combination
 *
 * @param {int[]} dice  five integers from one to six.
 * @return {int} sum of all dice
 */
module.exports.sumChance = sumAllDice;
