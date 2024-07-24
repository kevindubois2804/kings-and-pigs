import EnemyBeta from '../EnemyBeta.js';

export default class IsaacChargerEnemyBeta extends EnemyBeta {
  constructor({
    game,
    position,
    hitbox = {},
    velocity = {
      x: 0,
      y: 0,
    },
    environmentalCollisionBlocksData = [],
    imageSrc,
    frameRate,
    animations,
    loop,
  }) {
    super({ game, position, hitbox, velocity, imageSrc, environmentalCollisionBlocksData, frameRate, animations, loop });
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
    const middleHitBoxEnemyAlongXAxis = this.hitbox.position.x + this.hitbox.width / 2;
    const middleHitBoxPlayerAlongXAxis = this.game.player.hitbox.position.x + this.game.player.hitbox.width / 2;
    if (middleHitBoxPlayerAlongXAxis > middleHitBoxEnemyAlongXAxis) {
      this.switchSprite('moveRight');
      this.velocity.x = this.originalVelocity.x;
      this.position.x += this.velocity.x;
    } else if (middleHitBoxPlayerAlongXAxis < middleHitBoxEnemyAlongXAxis) {
      this.switchSprite('moveLeft');
      this.velocity.x = this.originalVelocity.x;
      this.position.x -= this.velocity.x;
    } else {
      this.velocity.x = 0;
      this.position.x += this.velocity.x;
      this.switchSprite('idle');
    }
  }
}
