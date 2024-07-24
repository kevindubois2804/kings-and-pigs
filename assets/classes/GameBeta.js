import { biomeOneLevelOneData } from '../data/biome/biome1/level1/biome-1-level-1.js';
import { playerData } from '../data/player.js';
import InputHandlerBeta from './InputHandlerBeta.js';
import LevelBeta from './LevelBeta.js';
import PlayerBeta from './PlayerBeta.js';

export default class GameBeta {
  constructor({ width, height }) {
    this.width = width;
    this.height = height;
    this.player = new PlayerBeta({ game: this, ...playerData });
    this.inputHandler = new InputHandlerBeta(this.player);
    this.level = new LevelBeta({ game: this, ...biomeOneLevelOneData });
  }

  update(context) {
    this.level.update(context);
  }

  draw(context) {
    this.level.draw(context);
  }
}
