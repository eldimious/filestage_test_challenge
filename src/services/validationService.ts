import {
  SUPPORTED_SPORTS,
  BASKETBALL,
  HANDBALL,
  basketballLineRegex,
  handballLineRegex,
  sportTypeRegex,
  startsWithAny,
} from '../common/utils';

export function validateSportLineFormat(data: string) {
  if (!startsWithAny(SUPPORTED_SPORTS, data) || !sportTypeRegex.test(data)) {
    throw new Error('Add file with correct format.');
  }
}

export function validatePlayerLineFormat(sport: string | undefined, line: string) {
  if (sport === BASKETBALL && !basketballLineRegex.test(line)) {
    throw new Error('Add file with correct format for players.');
  } else if (sport === HANDBALL && !handballLineRegex.test(line)) {
    throw new Error('Add file with correct format for players.');
  }
}
