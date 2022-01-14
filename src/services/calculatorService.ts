import { teamA, teamB } from '../common/utils';
import { Player } from '../domain/player';

export interface ITeamsPoints {
  'Team A': number;
  'Team B': number;
}

interface IRatingCalculatorInput {
  sport: string,
  position: string,
  points: string,
  rebounds: string,
  assists: string,
  goalsMade: string,
  goalsReceived: string,
}

interface ICalculatorService extends ISportsCalculatorService{
  ratingCalculator(input: IRatingCalculatorInput): number
  teamPointsCalculator(players: Player[]): ITeamsPoints
}

interface ISportsCalculatorService {
  basketball: {
    ratingCalculator(input: IRatingCalculatorInput): number
  },
  handball: {
    ratingCalculator(input: IRatingCalculatorInput): number
  },
}

const calculatorService: ICalculatorService = {
  basketball: {
    ratingCalculator(input: IRatingCalculatorInput): number {
      return 2 * Number(input.points) + 1 * Number(input.rebounds) + 3 * Number(input.assists);
    },
  },
  handball: {
    ratingCalculator(input: IRatingCalculatorInput): number {
      return input.position === 'G'
        ? 50 + 5 * Number(input.goalsMade) - 2 * Number(input.goalsReceived)
        : 20 + 5 * Number(input.goalsMade) - 2 * Number(input.goalsReceived);
    },
  },

  ratingCalculator(input: IRatingCalculatorInput): number {
    return this[input.sport as keyof ISportsCalculatorService].ratingCalculator({ ...input });
  },

  teamPointsCalculator(players: Player[]): ITeamsPoints {
    return players.reduce((acc, player) => {
      player.team === teamA
        ? acc[teamA] = Number(acc[teamA]) + Number(player.points)
        : acc[teamB] = Number(acc[teamB]) + Number(player.points);
      return acc;
    }, {
      [teamA]: 0,
      [teamB]: 0,
    });
  },
};

export function init(): ICalculatorService {
  return Object.assign(Object.create(calculatorService), {});
}
