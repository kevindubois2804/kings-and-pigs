import { Controller } from '@hotwired/stimulus';
import GameBeta from '../classes/GameBeta.js';

export default class extends Controller {
  static targets = ['canvas'];

  doors = [];

  overlay = {
    opacity: 0,
  };

  connect() {
    let context = this.canvasTarget.getContext('2d');

    this.init(context);

    this.animate(context);

    // this.backgroundLevelOneSprite = new Sprite(backgroundLevel1);
    // this.collisionsBlockLevel = collisionBlockArrayPopulaterFromRawData(collisionsLevel1);
    // this.doors.push(new Sprite(doorsLevel1));
    // this.createPlayer({
    //   collisionBlocks: this.collisionsBlockLevel,
    //   imageSrc: 'resources/player/idle.png',
    //   frameRate: 11,
    //   animations: playerAnimations,
    //   overlay: this.overlay,
    //   gsap: gsap,
    // });
    // this.inputHandler = new InputHandler(this.player, this.doors);
    // this.inputHandler.fireKeyBoardEventListeners();
    // this.animate(context);
  }

  init(context) {
    this.#putCanvasIntoSixteenByNineRatio();

    this.game = new GameBeta({ context: context, width: this.canvasTarget.width, height: this.canvasTarget.height });

    this.game.level.init();

    this.game.inputHandler.fireKeyBoardEventListeners();
  }

  animate = (context) => {
    context.clearRect(0, 0, this.canvasTarget.width, this.canvasTarget.height);
    this.game.update(context);
    // this.game.draw(context);
    window.requestAnimationFrame(() => {
      this.animate(context);
    });
  };

  #putCanvasIntoSixteenByNineRatio = () => {
    this.canvasTarget.width = 1024;
    this.canvasTarget.height = 576;
  };

  #fadeInCanvas = (context) => {
    context.save();

    context.globalAlpha = this.overlay.opacity;

    context.fillStyle = 'black';
    context.fillRect(0, 0, this.canvasTarget.width, this.canvasTarget.height);

    context.restore();
  };
}
