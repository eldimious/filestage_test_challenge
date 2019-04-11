class Player {
  constructor({
    name,
    nickname,
    number,
    team,
    position,
    points,
    ratingPoints,
  } = {}) {
    this.name = name;
    this.nickname = nickname;
    this.number = number;
    this.team = team;
    this.position = position;
    this.points = points;
    this.ratingPoints = ratingPoints;
  }
}


module.exports = Player;
