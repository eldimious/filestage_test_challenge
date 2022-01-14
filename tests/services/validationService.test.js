// const { expect } = require('chai');
// const {
//   validateSportLineFormat,
//   validatePlayerLineFormat,
// } = require('../../src/services/validationService');

// describe('validation service tests', () => {
//   describe('test validateSportLineFormat method', () => {
//     it('should return without any error, as we pass correct file format', async () => {
//       const data = `BASKETBALL
//       player 1;nick1;4;Team A;G;10;2;7`;
//       const fn = validateSportLineFormat(data);
//       expect(fn).to.be.undefined;
//     });
//     it('should return without any error, as we pass correct file format', async () => {
//       const data = `HANDBALL
//       player 1;nick1;4;Team A;G;10;2;7`;
//       const fn = validateSportLineFormat(data);
//       expect(fn).to.be.undefined;
//     });
//     it('should return throw error, bad file format', async () => {
//       const data = `FOOTBALL
//       player 1;nick1;4;Team A;G;10;2;7`;
//       expect(() => validateSportLineFormat(data)).to.throw('Add file with correct format.');
//     });
//   });
//   describe('test validatePlayerLineFormat method', () => {
//     it('should return without any error, as we pass correct player line format for basketball', async () => {
//       const data = `player 1;nick1;4;Team A;G;10;2;7`;
//       const fn = validatePlayerLineFormat('basketball', data);
//       expect(fn).to.be.undefined;
//     });
//     it('should return without any error, as we pass correct player line format for handball', async () => {
//       const data = `player 1;nick1;4;Team A;G;0;20`;
//       const fn = validatePlayerLineFormat('handball', data);
//       expect(fn).to.be.undefined;
//     });
//     it('should return throw error, bad file format', async () => {
//       const data = `player 1;nickaa;4;Team A;G;0;20`;
//       expect(() => validatePlayerLineFormat('basketball', data)).to.throw('Add file with correct format for players.');
//     });
//     it('should return throw error, bad file format', async () => {
//       const data = `player;nick1;4;Team A;G;0;20`;
//       expect(() => validatePlayerLineFormat('basketball', data)).to.throw('Add file with correct format for players.');
//     });
//     it('should return throw error, bad file format', async () => {
//       const data = `player 1;nick1;4;Team C;G;0;20`;
//       expect(() => validatePlayerLineFormat('basketball', data)).to.throw('Add file with correct format for players.');
//     });
//     it('should return throw error, bad file format', async () => {
//       const data = `player 1;nick1;4;Team A;B;0;20`;
//       expect(() => validatePlayerLineFormat('basketball', data)).to.throw('Add file with correct format for players.');
//     });
//   });
// });
