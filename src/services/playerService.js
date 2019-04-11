const Player = require('../domain/player');
const calculatorService = require('./calculatorService')();
const {
  sortArrayDescBy,
} = require('../common/utils');


function mapPlayerObj(lines, sport) {
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

function getNewPlayers(lines, sport) {
  const newPlayers = mapPlayerObj(lines, sport)
    .sort(sortArrayDescBy('ratingPoints'));
  const pointsPerTeam = calculatorService.teamPointsCalculator(newPlayers);
  const winningTeam = Object.keys(pointsPerTeam)
    .reduce((a, b) => pointsPerTeam[a] > pointsPerTeam[b] ? a : b);
  if (newPlayers[0].team === winningTeam) {
    newPlayers[0].ratingPoints += 10;
  }
  return newPlayers;
}

function getPlayerTotalRating(initialValues, newPlayersInfo) {
  const updatedPlayersArray = initialValues.concat(newPlayersInfo);
  let counts = updatedPlayersArray.reduce((prev, curr) => {
    let count = prev.get(curr.nickname) || 0;
    prev.set(curr.nickname, curr.ratingPoints + count);
    return prev;
  }, new Map());
  return [...counts].map(([key, value]) => ({
    nickname: key,
    ratingPoints: value,
  }));
}


module.exports = {
  getPlayerTotalRating,
  getNewPlayers,
};
