/* eslint-disable import/prefer-default-export */
export class Player {
  readonly name: string | undefined;

  readonly nickname: string;

  readonly number: string;

  readonly team: string;

  readonly position: string;

  readonly points: string;

  ratingPoints: number;

  constructor(data: Player) {
    this.name = data.name;
    this.nickname = data.nickname;
    this.number = data.number;
    this.team = data.team;
    this.position = data.position;
    this.points = data.points;
    this.ratingPoints = data.ratingPoints;
    // Object.assign(this, data);
  }
}
