import EntityBeta from './EntityBeta.js';

export default class EnemyBeta extends EntityBeta {
  constructor({
    game,
    enemyId,
    enemyType,
    position,
    velocity = {
      x: 0,
      y: 0,
    },
    hitbox = {},
    environmentalCollisionBlocksData = [],
    imageSrc,
    frameRate,
    animations,
    loop,
  }) {
    super({ game, position, hitbox, imageSrc, velocity, environmentalCollisionBlocksData, frameRate, animations, loop });

    this.enemyId = enemyId;

    this.enemyType = enemyType;

    this.markedForDeletion;
  }

  update() {}

  handleMovement() {}
}
