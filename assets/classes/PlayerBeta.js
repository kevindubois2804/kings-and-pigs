import EntityBeta from './EntityBeta.js';

export default class PlayerBeta extends EntityBeta {
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
    super({ game, position, hitbox, imageSrc, velocity, environmentalCollisionBlocksData, frameRate, animations, loop });
  }

  update() {
    this.position.x += this.velocity.x;

    this.updateHitbox();

    this.checkForHorizontalCollisions();

    this.applyGravity();

    this.updateHitbox();

    this.checkForVerticalCollisions();

    this.velocity.x = 0;
  }
}
