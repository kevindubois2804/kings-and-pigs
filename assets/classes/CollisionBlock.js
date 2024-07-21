export default class CollisionBlock {
  constructor({ position }) {
    this.position = position;
    this.width = 64;
    this.height = 64;
  }

  draw(context) {
    context.fillStyle = 'rgba(255, 0, 0, 0.5)';
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
