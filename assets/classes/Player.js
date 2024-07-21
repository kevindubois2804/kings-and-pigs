export default class Player {
  constructor({ collisionBlocks = [] }) {
    this.playerPositions = {
      x: 100,
      y: 100,
    };

    this.playerDimensions = {
      width: 100,
      height: 100,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.sides = {
      bottom: this.playerPositions.y + this.playerDimensions.height,
    };

    this.gravity = 1;

    this.collisionBlocks = collisionBlocks;
  }

  drawPlayer(context) {
    context.fillStyle = 'red';
    context.fillRect(this.playerPositions.x, this.playerPositions.y, this.playerDimensions.width, this.playerDimensions.height);
  }

  updatePlayerAttributes(canvasItem) {
    this.playerPositions.x += this.velocity.x;

    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];
      if (this.playerPositions.x <= collisionBlock.position.x + collisionBlock.blockDimensions.width && this.playerPositions.x + this.playerDimensions.width >= collisionBlock.position.x && this.playerPositions.y + this.playerDimensions.height >= collisionBlock.position.y && this.playerPositions.y <= collisionBlock.position.y + collisionBlock.blockDimensions.height) {
        if (this.velocity.x < -1) {
          this.playerPositions.x = collisionBlock.position.x + collisionBlock.blockDimensions.width + 0.01;
          break;
        }

        if (this.velocity.x > 1) {
          this.playerPositions.x = collisionBlock.position.x - this.playerDimensions.width - 0.01;
          break;
        }
      }
    }
    this.playerPositions.y += this.velocity.y;
    this.sides.bottom = this.playerPositions.y + this.playerDimensions.height;
    // above bottom of canvas
    if (this.sides.bottom + this.velocity.y < canvasItem.height) {
      this.velocity.y += this.gravity;
    } else {
      this.velocity.y = 0;
    }
  }
}
