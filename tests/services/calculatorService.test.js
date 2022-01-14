// const { expect } = require('chai');
// const calculatorService = require('../../src/services/calculatorService')();
// const basketballPlayers = require('../data/basketballPlayers');

// describe('calculator service tests', () => {
//   describe('test ratingCalculator method', () => {
//     it('should return rating for basketball', async () => {
//       const data = {
//         sport: 'basketball',
//         points: 10,
//         rebounds: 5,
//         assists: 0,
//       };
//       const fn = calculatorService.ratingCalculator(data);
//       expect(fn).to.equal(25);
//     });
//     it('should return rating for handball', async () => {
//       const data = {
//         sport: 'handball',
//         position: 'G',
//         goalsMade: 1,
//         goalsReceived: 10,
//       };
//       const fn = calculatorService.ratingCalculator(data);
//       expect(fn).to.equal(35);
//     });
//   });
//   describe('test teamPointsCalculator method', () => {
//     it('should return score per team', async () => {
//       const fn = calculatorService.teamPointsCalculator(basketballPlayers);
//       expect(fn).to.deep.equal({ 'Team A': 25, 'Team B': 32 });
//     });
//   });
// });
