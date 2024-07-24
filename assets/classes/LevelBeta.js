import dynamicClass from '../utils/class-factory.js';
import { collisionBlockArrayPopulaterFromRawData } from '../utils/kings-and-pigs-helpers-functions-beta.js';
import DoorBeta from './DoorBeta.js';
import SpriteBeta from './SpriteBeta.js';

export default class LevelBeta {
  levelEnemies = [];
  levelDoors = [];
  constructor({ game, idLevel, levelEnvironmentalCollisionBlocksData, levelBackgroundData, enemiesData, doorsData, playerPosition }) {
    this.game = game;
    this.idLevel = idLevel;
    this.levelEnvironmentalCollisionBlocks = collisionBlockArrayPopulaterFromRawData(levelEnvironmentalCollisionBlocksData);
    this.levelBackground = new SpriteBeta(levelBackgroundData);

    this.playerPosition = playerPosition;

    enemiesData.forEach((enemyData) => {
      const enemyClass = dynamicClass(enemyData.enemyType);
      this.levelEnemies.push(new enemyClass({ game: this.game, ...enemyData }));
    });

    doorsData.forEach((doorData) => {
      this.levelDoors.push(new DoorBeta({ ...doorData.spriteData, ...doorData.rawData }));
    });
  }

  init() {
    this.game.player.environmentalCollisionBlocks = this.levelEnvironmentalCollisionBlocks;

    this.levelEnemies.forEach((enemy) => {
      enemy.environmentalCollisionBlocks = this.levelEnvironmentalCollisionBlocks;
    });
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

  checkIfADoorHasBeenEntered() {
    this.levelDoors.forEach((door) => {
      if ((door.curentState = 'entered')) return true;
    });
    return false;
  }
}
