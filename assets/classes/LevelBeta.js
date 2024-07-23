import { collisionBlockArrayPopulaterFromRawData } from '../utils/kings-and-pigs-helpers-functions-beta';
import SpriteBeta from './SpriteBeta';

export default class LevelBeta {
  doors = [];
  entities = [];
  constructor({ levelCollisionBlocksData, backgroundData, doorsData, entitiesData }) {
    this.levelCollisionBlocks = collisionBlockArrayPopulaterFromRawData(levelCollisionBlocksData);
    this.background = new SpriteBeta(backgroundData);
    doorsData.map((door) => {
      this.doors.push(new SpriteBeta(door));
    });
  }
}
