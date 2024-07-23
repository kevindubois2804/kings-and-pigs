class GameObject {
  constructor({ position, src }) {
    this.position = position;
    this.sprite = new Sprite({
      gameObject: this,
      src: src || 'resources/idle.png',
    });
  }
}
