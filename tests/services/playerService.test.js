const { expect } = require('chai');
const {
  getPlayerTotalRating,
  getNewPlayers,
} = require('../../src/services/playerService');
const basketballPlayers = require('../data/basketballPlayers');
const handBallPlayers = require('../data/handBallPlayers');

describe('player service tests', () => {
  describe('test getPlayerTotalRating method', () => {
    it('should return total player rating', async () => {
      const initialValues = [];
      const values = basketballPlayers;
      const rating = getPlayerTotalRating(initialValues, values);
      expect(rating).to.deep.equal([
        { nickname: 'nick3', ratingPoints: 52 },
        { nickname: 'nick1', ratingPoints: 43 },
        { nickname: 'nick4', ratingPoints: 40 },
        { nickname: 'nick5', ratingPoints: 36 },
        { nickname: 'nick6', ratingPoints: 26 },
        { nickname: 'nick2', ratingPoints: 10 }
      ]);
      const newRating = getPlayerTotalRating(rating, handBallPlayers);
      expect(newRating).to.deep.equal([
        { nickname: 'nick3', ratingPoints: 82 },
        { nickname: 'nick1', ratingPoints: 53 },
        { nickname: 'nick4', ratingPoints: 45 },
        { nickname: 'nick5', ratingPoints: 66 },
        { nickname: 'nick6', ratingPoints: 36 },
        { nickname: 'nick2', ratingPoints: 75 } 
      ]);
    });
  });
  describe('test getNewPlayers method', () => {
    it('should return total players mapped object', async () => {
      const lines = [
        'player 1;nick1;4;Team A;G;10;2;7',
        'player 2;nick2;8;Team A;F;0;10;0',
        'player 3;nick3;15;Team A;C;15;10;4',
        'player 4;nick4;16;Team B;G;20;0;0',
        'player 5;nick5;23;Team B;F;4;7;7',
        'player 6;nick6;42;Team B;C;8;10;0'
      ]
      const players = getNewPlayers(lines, 'basketball');
      expect(players).to.deep.equal(basketballPlayers);
    })
  });
});
