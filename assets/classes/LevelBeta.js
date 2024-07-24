import dynamicClass from '../utils/class-factory.js';
import { collisionBlockArrayPopulaterFromRawData } from '../utils/kings-and-pigs-helpers-functions-beta.js';
import DoorBeta from './DoorBeta.js';
import SpriteBeta from './SpriteBeta.js';

export default class LevelBeta {
  levelEnemies = [];
  levelDoors = [];
  constructor({ game, levelId, levelEnvironmentalCollisionBlocksData, levelBackgroundData, enemiesData, doorsData }) {
    this.game = game;
    this.levelId = levelId;
    this.levelEnvironmentalCollisionBlocks = collisionBlockArrayPopulaterFromRawData(levelEnvironmentalCollisionBlocksData);
    this.levelBackground = new SpriteBeta(levelBackgroundData);

    enemiesData.forEach((enemyData) => {
      const enemyClass = dynamicClass(enemyData.enemyType);
      this.levelEnemies.push(new enemyClass({ game: this.game, ...enemyData }));
    });

    doorsData.forEach((doorData) => {
      this.levelDoors.push(new DoorBeta({ ...doorData.spriteData, ...doorData.rawData }));
    });

    console.log(this.levelDoors);
  }

  init() {
    this.game.player.environmentalCollisionBlocks = this.levelEnvironmentalCollisionBlocks;
  }

  update(context) {
    this.levelBackground.draw(context);

    this.levelDoors.forEach((door) => {
      door.draw(context);
    });

    this.levelEnvironmentalCollisionBlocks.forEach((block) => {
      block.draw(context);
    });

    this.game.playerInputHandler.handleInput();
    this.game.player.draw(context);
    this.game.player.update(context);

    this.levelEnemies.forEach((enemy) => {
      enemy.handleMovement();
      enemy.draw(context);
      enemy.update(context);
    });
  }
}
