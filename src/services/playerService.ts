import { Player } from '../domain/player';
import { init as calculatorServiceFactory, ITeamsPoints } from './calculatorService';
import {
  sortArrayDescBy,
} from '../common/utils';

const calculatorService = calculatorServiceFactory()

export interface PlayerTotalRating {
  nickname: string;
  ratingPoints: number;
}

function mapPlayerObj(lines: string[], sport: string): Player[] {
  return lines.map((line) => {
    const element = line.split(';');
    return new Player({
      name: element[0].split(' ').pop(),
      nickname: element[1],
      number: element[2],
      team: element[3],
      position: element[4],
      points: element[5],
      ratingPoints: calculatorService.ratingCalculator({
        sport,
        position: element[4],
        points: element[5],
        rebounds: element[6],
        assists: element[7],
        goalsMade: element[5],
        goalsReceived: element[6],
      }),
    });
  });
}

export function getNewPlayers(lines: string[], sport: string): Player[] {
  const newPlayers = mapPlayerObj(lines, sport)
    .sort(sortArrayDescBy('ratingPoints'));
  const pointsPerTeam: ITeamsPoints = calculatorService.teamPointsCalculator(newPlayers);
  const winningTeam = Object.keys(pointsPerTeam)
    .reduce((a, b) => pointsPerTeam[a as keyof ITeamsPoints] > pointsPerTeam[b as keyof ITeamsPoints] ? a : b);
  if (newPlayers[0].team === winningTeam) {
    newPlayers[0].ratingPoints += 10;
  }
  return newPlayers;
}

export function getPlayerTotalRating(initialValues: Player[], newPlayersInfo: Player[]): PlayerTotalRating[] {
  const updatedPlayersArray: Player[] = initialValues.concat(newPlayersInfo);
  let counts = updatedPlayersArray.reduce((prev: Map<string, number>, curr: Player) => {
    let count = prev.get(curr.nickname) || 0;
    prev.set(curr.nickname, curr.ratingPoints + count);
    return prev;
  }, new Map());
  return [...counts].map(([key, value]) => ({
    nickname: key,
    ratingPoints: value,
  }));
}
