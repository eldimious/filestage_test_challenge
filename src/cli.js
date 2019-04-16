const {
  readFile,
} = require('./services/fileService');
const {
  validateSportLineFormat,
  validatePlayerLineFormat,
} = require('./services/validationService');
const {
  getNewPlayers,
  getPlayerTotalRating,
} = require('./services/playerService');
const {
  sortArrayDescBy,
} = require('./common/utils');


if (process.argv.length < 3) {
  throw new Error('Need to add files paths as arguments');
  process.exit(1);
}


function getFileLines(data) {
  try {
    const lines = data.split('\n');
    const sport = lines.shift().toLowerCase();
    lines.forEach((line) => {
      validatePlayerLineFormat(sport, line);
    });
    return {
      lines,
      sport,
    };
  } catch (error) {
    throw error;
  }
}

async function getPlayersFromFile(file) {
  const data = await readFile(file, 'utf8');
  validateSportLineFormat(data);
  const {
    lines,
    sport,
  } = getFileLines(data);
  const players = getNewPlayers(lines, sport);
  return players;
}

module.exports = async function main() {
  try {
    const files = [];
    for (let i = 2; i < process.argv.length; i++) {
      files.push(process.argv[i]);
    }
    const results = await files.reduce(async (promise, item) => {
      // This line will wait for the last async function to finish.
      // The first iteration uses an already resolved Promise
      // so, it will immediately continue.
      const accumulator = await promise;
      const result = await getPlayersFromFile(item);
      return getPlayerTotalRating(accumulator, result);
    }, Promise.resolve([]));
    const sorted = results.sort(sortArrayDescBy('ratingPoints'));
    const mvpPlayer = sorted.shift();
    return mvpPlayer;
  } catch (error) {
    throw error;
  }
};
