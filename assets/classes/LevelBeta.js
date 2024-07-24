import dynamicClass from '../utils/class-factory.js';
import { collisionBlockArrayPopulaterFromRawData } from '../utils/kings-and-pigs-helpers-functions-beta.js';
import SpriteBeta from './SpriteBeta.js';

export default class LevelBeta {
  levelEnemies = [];
  constructor({ game, levelId, levelEnvironmentalCollisionBlocksData, levelBackgroundData, enemiesData }) {
    this.game = game;
    this.levelId = levelId;
    this.levelEnvironmentalCollisionBlocks = collisionBlockArrayPopulaterFromRawData(levelEnvironmentalCollisionBlocksData);
    this.levelBackground = new SpriteBeta(levelBackgroundData);

    enemiesData.forEach((enemy) => {
      const enemyClass = dynamicClass(enemy.enemyType);
      this.levelEnemies.push(new enemyClass({ game: this.game, ...enemy }));
    });
  }

  init() {
    this.game.player.environmentalCollisionBlocks = this.levelEnvironmentalCollisionBlocks;
  }

  update(context) {
    this.levelBackground.draw(context);

    this.levelEnvironmentalCollisionBlocks.forEach((block) => {
      block.draw(context);
    });

    this.game.inputHandler.handleInput();

    this.game.player.draw(context);

    this.game.player.update(context);
  }

  draw(context) {
    this.levelBackground.draw(context);
    this.levelEnvironmentalCollisionBlocks.forEach((block) => {
      block.draw(context);
    });

    this.game.player.draw(context);
    this.levelEnemies.forEach((enemy) => {
      enemy.draw(context);
    });
  }
}
