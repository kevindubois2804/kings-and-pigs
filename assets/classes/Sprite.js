export default class Sprite {
  constructor({ position }, imageSrc) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
    this.image.onload = () => {
      this.loaded = true;
    };
    this.loaded = false;
  }

  drawSprite(context) {
    if (!this.loaded) return;
    context.drawImage(this.image, this.position.x, this.position.y);
  }
}
