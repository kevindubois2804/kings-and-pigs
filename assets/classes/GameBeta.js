import { playerData } from '../data/player.js';
import InputHandlerBeta from './InputHandlerBeta.js';
import PlayerBeta from './PlayerBeta.js';
import SpriteBeta from './SpriteBeta.js';

export default class GameBeta {
  constructor({ width, height }) {
    this.width = width;
    this.height = height;
    this.player = new PlayerBeta({ game: this, ...playerData });
    this.inputHandler = new InputHandlerBeta(this.player);

    this.background = new SpriteBeta({
      position: {
        x: 0,
        y: 0,
      },
      imageSrc: 'resources/biomes/caves/level1/backgroundLevel1.png',
      frameRate: 2,
      frameBuffer: 50,
      loop: true,
    });

    this.enemies = [];
  }
  update() {
    this.player.update();
    this.enemies.forEach((enemy) => {
      enemy.update();
    });
  }

  draw(context) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, 1024, 576);

    this.background.draw(context);
    this.player.environmentalCollisionBlocks.forEach((block) => {
      block.draw(context);
    });

    this.player.draw(context);
    this.enemies.forEach((enemy) => {
      enemy.draw(context);
    });
  }

  addEnemy(enemy) {
    this.enemies.push(enemy);
  }
}
