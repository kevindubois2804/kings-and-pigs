export default class EnvironmentalCollisionBlockBeta {
  constructor({ position, height, width }) {
    this.position = position;
    this.width = width;
    this.height = height;
  }

  draw(context) {
    context.fillStyle = 'rgba(255, 0, 0, 0.5)';
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
