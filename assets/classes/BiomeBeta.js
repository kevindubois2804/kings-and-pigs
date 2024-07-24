import { collisionBlockArrayPopulaterFromRawData } from '../utils/kings-and-pigs-helpers-functions-beta';
import LevelBeta from './LevelBeta';

export default class BiomeBeta {
  biomeLevelsData = [];
  constructor(game, biomeLevelsData) {
    this.game = game;
    biomeLevelsData.forEach((levelData) => this.biomeLevelsData.push(new LevelBeta(levelData)));
  }
}
