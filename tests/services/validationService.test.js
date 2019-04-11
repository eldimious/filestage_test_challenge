const { expect } = require('chai');
const {
  validateFile,
} = require('../../src/services/validationService');

describe('validation service tests', () => {
  describe('test validateFile method', () => {
    it('should return without any error, as we pass correct file format', async () => {
      const data = `BASKETBALL
      player 1;nick1;4;Team A;G;10;2;7`;
      const fn = validateFile(data);
      expect(fn).to.be.undefined;
    });
    it('should return without any error, as we pass correct file format', async () => {
      const data = `HANDBALL
      player 1;nick1;4;Team A;G;10;2;7`;
      const fn = validateFile(data);
      expect(fn).to.be.undefined;
    });
    it('should return throw error, bad file format', async () => {
      const data = `FOOTBALL
      player 1;nick1;4;Team A;G;10;2;7`;
      expect(() => validateFile(data)).to.throw('Add file with correct format.');
    });
  });
});
