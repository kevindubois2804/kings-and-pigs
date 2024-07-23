import EnemyBeta from '../EnemyBeta.js';

export default class IsaacChargerEnemyBeta extends EnemyBeta {
  constructor({ game, position, hitbox = {}, environmentalCollisionBlocks = [], imageSrc, frameRate, animations, loop }) {
    super({ game, position, hitbox, imageSrc, environmentalCollisionBlocks, frameRate, animations, loop });
  }

  update() {
    this.handleMovement();
    this.updateHitbox();
    this.checkForHorizontalCollisions();
    this.applyGravity();
    this.updateHitbox();
    this.checkForVerticalCollisions();
  }

  handleMovement() {
    if (this.game.player.position.x > this.position.x) {
      this.switchSprite('moveRight');
      this.velocity.x = 2;
      this.position.x += this.velocity.x;
    } else if (this.game.player.position.x < this.position.x) {
      this.switchSprite('moveLeft');
      this.velocity.x = -2;
      this.position.x += this.velocity.x;
    } else {
      this.velocity.x = 0;
      this.position.x += this.velocity.x;
      this.switchSprite('idle');
    }
  }
}
