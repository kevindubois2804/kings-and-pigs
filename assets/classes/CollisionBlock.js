export default class CollisionBlock {
  constructor({ position }) {
    this.position = position;
    this.blockDimensions = {
      width: 64,
      height: 64,
    };
  }

  drawBlock(context) {
    context.fillStyle = 'rgba(255, 0, 0, 0.5)';
    context.fillRect(this.position.x, this.position.y, this.blockDimensions.width, this.blockDimensions.height);
  }
}
