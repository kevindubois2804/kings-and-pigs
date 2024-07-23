import EntityBeta from './EntityBeta.js';

export default class PlayerBeta extends EntityBeta {
  constructor({ game, position, hitbox = {}, environmentalCollisionBlocks = [], imageSrc, frameRate, animations, loop }) {
    super({ game, position, hitbox, imageSrc, environmentalCollisionBlocks, frameRate, animations, loop });
  }

  update() {
    this.#handleInput();

    this.updateHitbox();

    this.checkForHorizontalCollisions();

    this.applyGravity();

    this.updateHitbox();

    this.checkForVerticalCollisions();
  }

  #handleInput() {
    if (this.preventInput) return;
    if (this.game.inputHandler.keysToListenTo.ArrowRight.pressed) {
      this.switchSprite('runRight');
      this.velocity.x = 5;
      this.position.x += this.velocity.x;
      this.lastDirection = 'right';
    } else if (this.game.inputHandler.keysToListenTo.ArrowLeft.pressed) {
      this.switchSprite('runLeft');
      this.velocity.x = -5;
      this.position.x += this.velocity.x;
      this.lastDirection = 'left';
    } else {
      if (this.lastDirection === 'left') {
        this.switchSprite('idleLeft');
      } else {
        this.switchSprite('idleRight');
      }
    }
  }
}
