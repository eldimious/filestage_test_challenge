const {
  startsWithAny,
  SUPPORTED_SPORTS,
  BASKETBALL,
  HANDBALL,
} = require('../common/utils');

const playerNameFormat = 'player [0-9]+';
const numeric = '[0-9]+';
const space = ' +';
const alphaNumeric = '[a-zA-Z0-9]*';
const teamsFormat = '[AB]';
const positionFormat = '[CGF]';
const sportTypeRegex = new RegExp(`^${SUPPORTED_SPORTS.join('|')}\n`, 'i');
const handballLineRegex = new RegExp(`^${playerNameFormat};${alphaNumeric};${numeric};Team${space}${teamsFormat};${positionFormat};${numeric};${numeric}$`, 'i');
const basketballLineRegex = new RegExp(`^${playerNameFormat};${alphaNumeric};${numeric};Team${space}${teamsFormat};${positionFormat};${numeric};${numeric};${numeric}$`, 'i');

function validateSportLineFormat(data) {
  try {
    if (!startsWithAny(SUPPORTED_SPORTS, data) || !sportTypeRegex.test(data)) {
      throw new Error('Add file with correct format.');
    }
    return undefined;
  } catch (error) {
    throw error;
  }
}

function validatePlayerLineFormat(sport, line) {
  try {
    if (sport === BASKETBALL && !basketballLineRegex.test(line)) {
      throw new Error('Add file with correct format for players.');
    } else if (sport === HANDBALL && !handballLineRegex.test(line)) {
      throw new Error('Add file with correct format for players.');
    }
    return undefined;
  } catch (error) {
    throw error;
  }
}


module.exports = {
  validateSportLineFormat,
  validatePlayerLineFormat,
};
