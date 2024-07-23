class Sprite {
  constructor({ src, frameRate = 1, animations = false, frameBuffer = 2, loop = true, autoplay = true }) {
    //Set up the image
    this.image = new Image();
    this.image.src = src;
    this.image.onload = () => {
      this.width = this.image.width / this.frameRate;
      this.height = this.image.height;
      this.isLoaded = true;
    };

    //Configure Animation & Initial State
    if (this.animations) {
      for (let key in this.animations) {
        const image = new Image();
        image.src = this.animations[key].imageSrc;
        this.animations[key].image = image;
      }
    }
    this.currentAnimation = currentAnimation || 'idleRight';
    this.frameRate = frameRate;
    this.currentFrame = 0;
    this.elapsedFrames = 0;
    this.frameBuffer = frameBuffer;
    this.animations = animations;
    this.loop = loop;
    this.autoplay = autoplay;

    //Reference the game object
    this.gameObject = gameObject;

    for (let key in this.animations) {
      const image = new Image();
      image.src = this.animations[key].src;
      this.animations[key].image = image;
    }

    // config hitbox
    this.hitbox = {
      position: {
        x: this.position.x + hitbox?.x,
        y: this.position.y + hitbox?.y,
      },
      width: hitbox.width,
      height: hitbox.height,
    };
  }

  draw(ctx) {
    const cropbox = {
      position: {
        x: this.width * this.currentFrame,
        y: 0,
      },
      width: this.width,
      height: this.height,
    };
    this.isLoaded && ctx.drawImage(this.image, cropbox.position.x, cropbox.position.y, cropbox.width, cropbox.height, this.position.x, this.position.y, this.width, this.height);

    this.updateFrames();
  }

  switchSprite(name) {
    if (this.image === this.animations[name].image) return;
    this.currentFrame = 0;
    this.image = this.animations[name].image;
    this.frameRate = this.animations[name].frameRate;
    this.frameBuffer = this.animations[name].frameBuffer;
    this.loop = this.animations[name].loop;
    this.currentAnimation = this.animations[name];
    this.currentAnimation.name = name;
  }

  updateFrames() {
    if (!this.autoplay) return;

    this.elapsedFrames++;

    if (this.elapsedFrames % this.frameBuffer === 0) {
      if (this.currentFrame < this.frameRate - 1) {
        this.currentFrame++;
      } else if (this.loop) {
        this.currentFrame = 0;
      }
    }

    if (this.currentAnimation?.onComplete) {
      if (this.currentFrame === this.frameRate - 1 && !this.currentAnimation.isActive) {
        console.log(this.currentAnimation);
        this.currentAnimation.onComplete();
        this.currentAnimation.isActive = true;
      }
    }
  }
}
