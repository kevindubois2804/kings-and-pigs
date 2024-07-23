import EntityBeta from './EntityBeta.js';

export default class EnemyBeta extends EntityBeta {
  constructor({ game, position, hitbox = {}, environmentalCollisionBlocks = [], imageSrc, frameRate, animations, loop }) {
    super({ game, position, hitbox, imageSrc, environmentalCollisionBlocks, frameRate, animations, loop });
  }

  update() {
    
  }

  handleMovement() {

  }
}
