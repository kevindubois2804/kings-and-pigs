import SpriteBeta from './SpriteBeta.js';

export default class DoorBeta extends SpriteBeta {
  constructor({ position, imageSrc, frameRate = 1, frameBuffer = 2, animations = false, loop = false, autoplay = false, idLevelAssociated, idDoor }) {
    super({ imageSrc, frameRate, animations, loop, frameBuffer, loop, autoplay });

    this.position = position;

    this.currentState = 'entered'; // 'closed'

    this.idLevelAssociated = idLevelAssociated;
  }

  update() {}
}
