const {
  teamA,
  teamB,
} = require('../common/utils');

const calculatorService = {
  basketball: {
    ratingCalculator({ points, rebounds, assists }) {
      return 2 * Number(points) + 1 * Number(rebounds) + 3 * Number(assists);
    },
  },
  handball: {
    ratingCalculator({ position, goalsMade, goalsReceived }) {
      return position === 'G'
        ? 50 + 5 * Number(goalsMade) - 2 * Number(goalsReceived)
        : 20 + 5 * Number(goalsMade) - 2 * Number(goalsReceived);
    },
  },

  ratingCalculator({
    sport,
    position,
    points,
    rebounds,
    assists,
    goalsMade,
    goalsReceived,
  }) {
    return this[sport].ratingCalculator({
      sport,
      position,
      points,
      rebounds,
      assists,
      goalsMade,
      goalsReceived,
    });
  },

  teamPointsCalculator(players) {
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


module.exports = function init() {
  return Object.assign(Object.create(calculatorService), {});
};
