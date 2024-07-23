import { collisionBlockArrayPopulaterFromRawData, collisionStatement } from '../utils/kings-and-pigs-helpers-functions-beta.js';
import SpriteBeta from './SpriteBeta.js';

export default class EntityBeta extends SpriteBeta {
  constructor({ game, position, hitbox = {}, environmentalCollisionBlocks = [], imageSrc, frameRate = 1, frameBuffer = 2, animations = false, loop = true }) {
    super({ imageSrc, frameRate, animations, loop, frameBuffer });

    this.game = game;

    this.environmentalCollisionBlocks = collisionBlockArrayPopulaterFromRawData(environmentalCollisionBlocks);

    this.position = position;

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.gravity = 1;

    this.hitboxShift = {
      x: hitbox.x,
      y: hitbox.y,
    };

    this.hitbox = {
      position: {
        x: this.position.x + hitbox?.x,
        y: this.position.y + hitbox?.y,
      },
      width: hitbox.width,
      height: hitbox.height,
    };
  }

  update() {}

  checkForVerticalCollisions() {
    // for block to check for vertical collisions
    for (let i = 0; i < this.environmentalCollisionBlocks.length; i++) {
      const environmentalCollisionBlock = this.environmentalCollisionBlocks[i];
      // if a collision exists
      if (collisionStatement({ object1: this, object2: environmentalCollisionBlock })) {
        // collision on y axis going up
        if (this.velocity.y < 0) {
          // reset velocity to avoid out of boundariesthis.hitbox
          this.velocity.y = 0;
          // taking into account the hitbox
          const offset = this.hitbox.position.y - this.position.y;
          this.position.y = environmentalCollisionBlock.position.y + environmentalCollisionBlock.height - offset + 0.01;
          break;
        }
        // collision on x axis going to the right
        if (this.velocity.y > 0) {
          // reset velocity to avoid out of boundaries
          this.velocity.y = 0;
          // taking into account hitbox
          const offset = this.hitbox.position.y - this.position.y + this.hitbox.height;
          this.position.y = environmentalCollisionBlock.position.y - offset - 0.01;
          break;
        }
      }
    }
  }

  checkForHorizontalCollisions() {
    // for block to check for horizontal collisions
    for (let i = 0; i < this.environmentalCollisionBlocks.length; i++) {
      const environmentalCollisionBlock = this.environmentalCollisionBlocks[i];
      // if a collision exists
      if (
        collisionStatement({
          object1: this,
          object2: environmentalCollisionBlock,
        })
      ) {
        // collision on x axis going to the elft
        if (this.velocity.x < 0) {
          // taking into account hitbox
          const offset = this.hitbox.position.x - this.position.x;
          this.position.x = environmentalCollisionBlock.position.x + environmentalCollisionBlock.width - offset + 0.01;
          break;
        }
        // collision on x axis going to the right
        if (this.velocity.x > 0) {
          // taking into account hitbox
          const offset = this.hitbox.position.x - this.position.x + this.hitbox.width;
          this.position.x = environmentalCollisionBlock.position.x - offset - 0.01;
          break;
        }
      }
    }
  }

  applyGravity() {
    // apply gravity
    this.velocity.y += this.gravity;
    this.position.y += this.velocity.y;
  }

  updateHitbox() {
    this.hitbox = {
      ...this.hitbox,
      position: {
        x: this.position.x + this.hitboxShift.x,
        y: this.position.y + this.hitboxShift.y,
      },
    };
  }
}
