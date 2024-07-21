import Sprite from './Sprite.js';

export default class Player extends Sprite {
  constructor({ collisionBlocks = [], imageSrc, frameRate, animations }) {
    super({ imageSrc, frameRate, animations });
    this.position = {
      x: 200,
      y: 200,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.gravity = 1;

    this.collisionBlocks = collisionBlocks;
  }

  updatePlayerAttributes(context) {
    // context.fillStyle = 'rgba(0,0,255, 0.5)';
    // context.fillRect(this.position.x, this.position.y, this.width, this.height);

    this.position.x += this.velocity.x;

    this.#updateHitbox();

    this.#checkForHorizontalCollisions();

    this.#applyGravity();

    // context.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height);

    this.#updateHitbox();

    this.#checkForVerticalCollisions();
  }

  switchSprite(name) {
    if (this.image === this.animations[name].image) return;
    this.currentFrame = 0;
    this.image = this.animations[name].image;
    this.frameRate = this.animations[name].frameRate;
    this.frameBuffer = this.animations[name].frameBuffer;
  }

  #checkForHorizontalCollisions() {
    // for block to check for horizontal collisions
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];
      // if a collision exists
      if (this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width && this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x && this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y && this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height) {
        // collision on x axis going to the elft
        if (this.velocity.x < 0) {
          // taking into account hitbox
          const offset = this.hitbox.position.x - this.position.x;
          this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01;
          break;
        }
        // collision on x axis going to the right
        if (this.velocity.x > 0) {
          // taking into account hitbox
          const offset = this.hitbox.position.x - this.position.x + this.hitbox.width;
          this.position.x = collisionBlock.position.x - offset - 0.01;
          break;
        }
      }
    }
  }

  #applyGravity() {
    // apply gravity
    this.velocity.y += this.gravity;
    this.position.y += this.velocity.y;
  }

  #updateHitbox() {
    this.hitbox = {
      position: {
        x: this.position.x + 58,
        y: this.position.y + 34,
      },
      width: 50,
      height: 50,
    };
  }

  #checkForVerticalCollisions() {
    // for block to check for vertical collisions
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];
      // if a collision exists
      if (this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width && this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x && this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y && this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height) {
        // collision on y axis going up
        if (this.velocity.y < 0) {
          // reset velocity to avoid out of boundariesthis.hitbox
          this.velocity.y = 0;
          // taking into account the hitbox
          const offset = this.hitbox.position.y - this.position.y;
          this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01;
          break;
        }
        // collision on x axis going to the right
        if (this.velocity.y > 0) {
          // reset velocity to avoid out of boundaries
          this.velocity.y = 0;
          // taking into account hitbox
          const offset = this.hitbox.position.y - this.position.y + this.hitbox.height;
          this.position.y = collisionBlock.position.y - offset - 0.01;
          break;
        }
      }
    }
  }
}
