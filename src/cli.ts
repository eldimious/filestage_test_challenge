import { Player } from 'domain/player';
import {
  readFile,
} from './services/fileService';
import {
  validateSportLineFormat,
  validatePlayerLineFormat,
} from './services/validationService';
import {
  getNewPlayers,
  getPlayerTotalRating,
  PlayerTotalRating,
} from './services/playerService';
import {
  sortArrayDescBy,
} from './common/utils';

if (process.argv.length < 3) {
  throw new Error('Need to add files paths as arguments');
  process.exit(1);
}

function getFileLines(data: string) {
  const lines: string[] = data.split('\n');
  const sport: string | undefined = lines.shift()?.toLowerCase();
  if (!sport) {
    throw new Error('We can not indentify sport');
  }
  lines.forEach((line) => {
    validatePlayerLineFormat(sport, line);
  });
  return {
    lines,
    sport,
  };
}

async function getPlayersFromFile(file: string): Promise<Player[]> {
  const data = await readFile(file, 'utf8');
  validateSportLineFormat(data);
  const {
    lines,
    sport,
  } = getFileLines(data);
  const players = getNewPlayers(lines, sport);
  return players;
}

export async function main() {
  const files = [];
  for (let i = 2; i < process.argv.length; i++) {
    files.push(process.argv[i]);
  }
  const results: PlayerTotalRating[] = await files.reduce(async (promise: any, item: string) => {
    const accumulator = await promise;
    const result: Player[] = await getPlayersFromFile(item);
    return getPlayerTotalRating(accumulator, result);
  }, Promise.resolve([]));
  const sorted = results.sort(sortArrayDescBy('ratingPoints'));
  const mvpPlayer = sorted.shift();
  return mvpPlayer;
};
