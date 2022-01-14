import { PlayerTotalRating } from 'services/playerService';

export const SUPPORTED_SPORTS = [
  'BASKETBALL',
  'HANDBALL',
];
export const teamA = 'Team A';
export const teamB = 'Team B';
export const BASKETBALL = 'basketball';
export const HANDBALL = 'handball';
export const playerNameFormat = 'player [0-9]+';
export const numeric = '[0-9]+';
export const space = ' +';
export const alphaNumeric = '[a-zA-Z0-9]*';
export const teamsFormat = '[AB]';
export const positionFormat = '[CGF]';
export const sportTypeRegex = new RegExp(`^${SUPPORTED_SPORTS.join('|')}\n`, 'i');
export const handballLineRegex = new RegExp(`^${playerNameFormat};${alphaNumeric};${numeric};Team${space}${teamsFormat};${positionFormat};${numeric};${numeric}$`, 'i');
export const basketballLineRegex = new RegExp(`^${playerNameFormat};${alphaNumeric};${numeric};Team${space}${teamsFormat};${positionFormat};${numeric};${numeric};${numeric}$`, 'i');

export const sortArrayDescBy = (prop: string) => (a: PlayerTotalRating, b: PlayerTotalRating): number => {
  if (a[prop as keyof PlayerTotalRating] > b[prop as keyof PlayerTotalRating]) return -1;
  if (a[prop as keyof PlayerTotalRating] < b[prop as keyof PlayerTotalRating]) return 1;
  return 0;
};

export function startsWithAny(arr: string[], str: string): boolean {
  return arr.some((el: string) => str.startsWith(el));
}
