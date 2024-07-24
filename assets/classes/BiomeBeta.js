import LevelBeta from './LevelBeta.js';

export default class BiomeBeta {
  biomeLevels = [];
  constructor({ game, biomeLevelsData }) {
    this.game = game;
    biomeLevelsData.forEach((levelData) => this.biomeLevels.push(new LevelBeta({ game: this.game, ...levelData })));
    this.currentLevel = this.biomeLevels[0];
  }
}
